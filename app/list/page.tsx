// pages/list.tsx

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Summer T-Shirt",
    brand: "EcoWear",
    size: "M",
    price: "29,99€",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Denim Pants",
    brand: "GreenDenim",
    size: "32",
    price: "59,99€",
    imageUrl: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SmVhbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Summer Dress",
    brand: "NatureStyle",
    size: "S",
    price: "49,99€",
    imageUrl: "https://images.unsplash.com/photo-1520026582657-4daf5bb60adb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29tbWVya2xlaWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Hoodie",
    brand: "UrbanGreen",
    size: "L",
    price: "39,99€",
    imageUrl: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Sneakers",
    brand: "BioStep",
    size: "42",
    price: "89,99€",
    imageUrl: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Denim Jacket",
    brand: "ReStyle",
    size: "M",
    price: "69,99€",
    imageUrl: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amVhbnNqYWNrZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Cap",
    brand: "EcoHead",
    size: "One Size",
    price: "19,99€",
    imageUrl: "https://images.unsplash.com/photo-1691256676359-20e5c6d4bc92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNuYXBiYWNrfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "Sunglasses",
    brand: "SunEco",
    size: "One Size",
    price: "24,99€",
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function ListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Titel */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Products of our Partners</h1>
            <p className="text-xl text-gray-600">Explore our selection of sustainable clothing</p>
          </div>

          {/* Filterbereich */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg mb-10 flex flex-wrap gap-4 justify-center">
            <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>One Size</option>
            </select>

            <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Price</option>
              <option>Under 20€</option>
              <option>20€ - 50€</option>
              <option>50€ - 100€</option>
              <option>Over 100€</option>
            </select>

            <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Brand</option>
              <option>EcoWear</option>
              <option>GreenDenim</option>
              <option>NatureStyle</option>
              <option>UrbanGreen</option>
              <option>BioStep</option>
              <option>ReStyle</option>
              <option>EcoHead</option>
              <option>SunEco</option>
            </select>

            <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Fit</option>
              <option>Slim</option>
              <option>Normal</option>
              <option>Loose</option>
              <option>Oversized</option>
            </select>
          </div>

          {/* Produktgrid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map(({ id, name, brand, size, price, imageUrl }) => (
              <Card
                key={id}
                className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden"
              >
                <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{brand}</p>
                  <p className="text-gray-700">Größe: {size}</p>
                  <p className="text-green-700 font-bold">{price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
