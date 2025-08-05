"use client"

import type React from "react"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Camera, X, ImageIcon } from "lucide-react"
import Cropper from "react-easy-crop"
import { getCroppedImg } from "@/lib/crop-utils"

interface ImageUploadProps {
  onImageUpload: (croppedImage: string) => void
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [showCropper, setShowCropper] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [focusPreference, setFocusPreference] = useState(50) // 0 = Type, 100 = Color


  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setShowCropper(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleCropConfirm = async () => {
    if (selectedImage && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(selectedImage, croppedAreaPixels)
        onImageUpload(croppedImage)
      } catch (error) {
        console.error("Error cropping image:", error)
      }
    }
  }

  const handleCancel = () => {
    setSelectedImage(null)
    setShowCropper(false)
    setCrop({ x: 0, y: 0 })
    setZoom(1)
    setCroppedAreaPixels(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (showCropper && selectedImage) {
    return (
      <Card className="border-2 border-green-200 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Crop Your Image</h3>
            <p className="text-gray-600">Focus on the clothing item and adjust the crop area for best results</p>
          </div>

          <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden mb-6 shadow-inner">
            <Cropper
              image={selectedImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Zoom</label>
              <span className="text-sm text-gray-500">{Math.round(zoom * 100)}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>


          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What should we set our focus on
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={focusPreference}
              onChange={(e) => setFocusPreference(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Type of Clothing</span>
              <span>Color of Clothing</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleCancel} variant="outline" className="flex-1 bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleCropConfirm}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              disabled={!croppedAreaPixels}
            >
              <Upload className="h-4 w-4 mr-2" />
              Analyze Image
            </Button>
          </div>




        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={`border-2 border-dashed transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl ${
        isDragOver
          ? "border-green-400 bg-green-50 scale-105"
          : "border-gray-300 hover:border-green-400 hover:bg-green-50"
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => fileInputRef.current?.click()}
    >
      <CardContent className="p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <ImageIcon className="h-10 w-10 text-white" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Upload Your Clothing Photo</h3>
        <p className="text-gray-600 mb-8 text-lg">Drag and drop your image here, or click to select a file</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 bg-white hover:bg-gray-50"
            onClick={(e) => {
              e.stopPropagation()
              fileInputRef.current?.click()
            }}
          >
            <Camera className="h-5 w-5" />
            <span>Choose File</span>
          </Button>
        </div>

        <p className="text-sm text-gray-500">Supported formats: JPG, PNG, WebP • Max size: 10MB</p>

        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInputChange} className="hidden" />
      </CardContent>
    </Card>
  )
}
