"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageUpload from "@/components/image-upload"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

function transformTable(htmlString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const table = doc.querySelector("table");
  if (!table) return htmlString;

  const cells = Array.from(table.querySelectorAll("td"));
  if (cells.length < 3) return htmlString;

  const newTable = document.createElement("table");
  newTable.style.borderCollapse = "collapse";
  newTable.style.width = "100%";

  // Neue Kopfzeile: Link | Nachhaltigkeit | Preis
  const headerRow = document.createElement("tr");
  ["Link", "Nachhaltigkeitszertifikat", "Preis"].forEach(title => {
    const th = document.createElement("th");
    th.textContent = title;
    th.style.border = "1px solid #ccc";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });
  newTable.appendChild(headerRow);

  // Es wird davon ausgegangen, dass jede Produktgruppe 3 Spalten hat
  const valuesPerProduct = 3;
  const startRowIndex = 1; // Wir wollen die zweite Tabellenzeile (Index 1), die die Daten enthält
  const allRows = Array.from(table.querySelectorAll("tr"));
  const dataRow = allRows[startRowIndex];
  const dataCells = Array.from(dataRow?.querySelectorAll("td") || []);

  const productCount = dataCells.length / valuesPerProduct;

  for (let i = 0; i < productCount; i++) {
    const row = document.createElement("tr");

    const linkCell = dataCells[i * valuesPerProduct];
    const zertifikatCell = dataCells[i * valuesPerProduct + 1];
    const preisCell = dataCells[i * valuesPerProduct + 2];

    [linkCell, zertifikatCell, preisCell].forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell?.textContent || "";
      td.style.border = "1px solid #ccc";
      td.style.padding = "8px";
      row.appendChild(td);
    });

    newTable.appendChild(row);
  }

  return newTable.outerHTML;
}


export default function HomePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const glassesRef = useRef<HTMLDivElement>(null)
  const [externalHtml, setExternalHtml] = useState<string | null>(null)
  const [transformedHtml, setTransformedHtml] = useState<string>("")

  const eyesRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyesRef.current) return

      const rect = eyesRef.current.getBoundingClientRect()
      const eyesCenterX = rect.left + rect.width / 2
      const eyesCenterY = rect.top + rect.height / 2

      const angle = Math.atan2(e.clientY - eyesCenterY, e.clientX - eyesCenterX)
      const maxDistance = 12

      const leftIrisX = 80 + Math.cos(angle) * maxDistance
      const leftIrisY = 70 + Math.sin(angle) * maxDistance
      const rightIrisX = 200 + Math.cos(angle) * maxDistance
      const rightIrisY = 70 + Math.sin(angle) * maxDistance

      const setPos = (selector: string, x: number, y: number) => {
        const el = eyesRef.current?.querySelector(selector) as SVGCircleElement
        if (el) {
          el.setAttribute("cx", x.toString())
          el.setAttribute("cy", y.toString())
        }
      }

      setPos(".left-iris", leftIrisX, leftIrisY)
      setPos(".right-iris", rightIrisX, rightIrisY)
      setPos(".left-pupil", leftIrisX, leftIrisY)
      setPos(".right-pupil", rightIrisX, rightIrisY)
      setPos(".left-reflection-1", leftIrisX - 6, leftIrisY - 6)
      setPos(".right-reflection-1", rightIrisX + 6, rightIrisY - 6)
      setPos(".left-reflection-2", leftIrisX + 3, leftIrisY + 3)
      setPos(".right-reflection-2", rightIrisX - 3, rightIrisY + 3)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (externalHtml) {
      const transformed = transformTable(externalHtml)
      setTransformedHtml(transformed)
    }
  }, [externalHtml])

  const calculateEyePosition = (eyeElement: HTMLElement) => {
    if (!eyeElement) return { x: 0, y: 0 }

    const rect = eyeElement.getBoundingClientRect()
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2

    const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX)
    const distance = Math.min(8, Math.hypot(mousePosition.x - eyeCenterX, mousePosition.y - eyeCenterY) / 10)

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    }
  }

  const handleImageUpload = async (croppedImage: string) => {
    setUploadedImage(croppedImage)
    setShowResults(true)

    try {
      const response = await fetch(croppedImage)
      const blob = await response.blob()

      const formData = new FormData()
      formData.append("image", blob, "uploaded-image.jpg")

      const apiResponse = await fetch("http://localhost:5678/webhook-test/test-website", {
        method: "POST",
        body: formData,
      })

      if (apiResponse.ok) {
        const html = await apiResponse.text()
        setExternalHtml(html) // rohen HTML-String speichern
      } else {
        throw new Error("Upload failed")
      }
    } catch (error) {
      console.error("Fehler beim Upload:", error)
      alert("Fehler beim Upload")
    }
  }

  const handleTryAgain = () => {
    setUploadedImage(null)
    setShowResults(false)
  }

if (showResults && uploadedImage) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Your Outfit Alternatives!</h2>

        {transformedHtml ? (
          <div
            className="external-html w-full bg-gray-50 text-black p-6 rounded-xl shadow-lg border border-gray-200 overflow-auto"
            dangerouslySetInnerHTML={{ __html: transformedHtml }}
          />
        ) : (
          <p className="text-center text-gray-600">Load Analysis...</p>
        )}

        <div className="mt-12 flex justify-center">
          <Button
            onClick={handleTryAgain}
            className="bg-green-600 text-white hover:bg-green-500 hover:scale-105 px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-2 border-green-500"
          >
            Check other outfits
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

  return (
    <div className="relative min-h-screen flex flex-col animated-bg overflow-hidden">
      <Navigation />

      {/* Decorative dots - improved for darker background */}
      <div className="floating-shapes"></div>
      <div className="dynamic-particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
            Sustainability
            <br />
            with <span className="text-green-300">EthicEye</span>
          </h1>

          <div className="flex justify-center my-12">
            <svg
              ref={eyesRef}
              width="280"
              height="140"
              viewBox="0 0 280 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Left Eye */}
              <ellipse cx="80" cy="70" rx="45" ry="40" fill="white" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2" />
              <circle
                cx="80"
                cy="70"
                r="22"
                fill="#10b981"
                opacity="0.9"
                className="left-iris"
                style={{ transition: "all 0.1s ease" }}
              />
              <circle
                cx="80"
                cy="70"
                r="10"
                fill="#065f46"
                className="left-pupil"
                style={{ transition: "all 0.1s ease" }}
              />
              <circle
                cx="74"
                cy="64"
                r="4"
                fill="white"
                opacity="0.8"
                className="left-reflection-1"
                style={{ transition: "all 0.1s ease" }}
              />
              <circle
                cx="83"
                cy="67"
                r="2"
                fill="white"
                opacity="0.6"
                className="left-reflection-2"
                style={{ transition: "all 0.1s ease" }}
              />
              {/* Right Eye */}
              <ellipse
                cx="200"
                cy="70"
                rx="45"
                ry="40"
                fill="white"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="70"
                r="22"
                fill="#059669"
                opacity="0.9"
                className="right-iris"
                style={{ transition: "all 0.1s ease" }}
              />
              <circle
                cx="200"
                cy="70"
                r="10"
                fill="#065f46"
                className="right-pupil"
                style={{ transition: "all 0.1s ease" }}
              />
              <circle
                cx="206"
                cy="64"
                r="4"
                fill="white"
                opacity="0.8"
                className="right-reflection-1"
                style={{ transition: "all 0.1s ease" }}
              />
              <circle
                cx="197"
                cy="67"
                r="2"
                fill="white"
                opacity="0.6"
                className="right-reflection-2"
                style={{ transition: "all 0.1s ease" }}
              />
              {/* Glasses Frame */}
              <circle cx="80" cy="70" r="50" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="4" />
              <circle cx="200" cy="70" r="50" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="4" />
              <rect x="130" y="67" width="40" height="6" rx="3" fill="rgba(255, 255, 255, 0.9)" />
              <rect x="15" y="67" width="30" height="6" rx="3" fill="rgba(255, 255, 255, 0.9)" />
              <rect x="235" y="67" width="30" height="6" rx="3" fill="rgba(255, 255, 255, 0.9)" />
              <ellipse cx="65" cy="55" rx="12" ry="18" fill="rgba(255, 255, 255, 0.3)" transform="rotate(-25 65 55)" />
              <ellipse
                cx="185"
                cy="55"
                rx="12"
                ry="18"
                fill="rgba(255, 255, 255, 0.3)"
                transform="rotate(25 185 55)"
              />
            </svg>



          </div>

          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover sustainable outfit alternatives with an AI-powered analysis  
          </p>

           {/* Buttons - enhanced design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-64">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-50 hover:scale-105 px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-2 border-white"
              onClick={() => document.getElementById("upload-section")?.scrollIntoView({ behavior: "smooth" })}

            >
                <Sparkles className="w-5 h-5" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/15 hover:scale-105 px-10 py-4 text-lg rounded-full bg-transparent font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                How we find alternatives?
              </Button>
            </Link>
          </div>

          {!uploadedImage ? (
            <div id="upload-section">
              <ImageUpload onImageUpload={handleImageUpload} />
            </div>
          ) : (
            <Button
              onClick={handleTryAgain}
              className="bg-white text-green-700 hover:bg-gray-50 hover:scale-105 px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-2 border-white"
            >
              Select another picture
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
