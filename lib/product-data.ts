export interface SustainableProduct {
  id: string
  name: string
  description: string
  image: string
  sustainabilityRating: number
  materials: string
  origin: string
  providerUrl: string
  price: string
}

export const sustainableProducts: SustainableProduct[] = [
  {
    id: "1",
    name: "Organic Cotton Essential Tee",
    description: "Made from 100% GOTS certified organic cotton with natural dyes and ethical production",
    image: "/placeholder.svg?height=400&width=400",
    sustainabilityRating: 9,
    materials: "100% Organic Cotton",
    origin: "Portugal",
    providerUrl: "https://example-sustainable-store.com/organic-tee",
    price: "$32.00",
  },
  {
    id: "2",
    name: "Recycled Ocean Plastic Hoodie",
    description: "Crafted from recycled ocean plastic bottles with carbon-neutral shipping",
    image: "/placeholder.svg?height=400&width=400",
    sustainabilityRating: 8,
    materials: "85% Recycled Polyester, 15% Organic Cotton",
    origin: "Netherlands",
    providerUrl: "https://example-eco-brand.com/recycled-hoodie",
    price: "$68.00",
  },
  {
    id: "3",
    name: "Hemp-Cotton Blend Shirt",
    description: "Durable hemp-cotton blend with fair trade certification and natural dyeing",
    image: "/placeholder.svg?height=400&width=400",
    sustainabilityRating: 8,
    materials: "55% Hemp, 45% Organic Cotton",
    origin: "India",
    providerUrl: "https://example-hemp-clothing.com/casual-shirt",
    price: "$48.00",
  },
  {
    id: "4",
    name: "Tencel Lyocell Dress",
    description: "Soft and breathable dress made from sustainably sourced eucalyptus wood pulp",
    image: "/placeholder.svg?height=400&width=400",
    sustainabilityRating: 9,
    materials: "100% Tencel Lyocell",
    origin: "Austria",
    providerUrl: "https://example-tencel-fashion.com/lyocell-dress",
    price: "$85.00",
  },
  {
    id: "5",
    name: "Linen Summer Pants",
    description: "European flax linen with minimal water usage and traditional weaving techniques",
    image: "/placeholder.svg?height=400&width=400",
    sustainabilityRating: 8,
    materials: "100% European Linen",
    origin: "Belgium",
    providerUrl: "https://example-linen-co.com/summer-pants",
    price: "$72.00",
  },
  {
    id: "6",
    name: "Merino Wool Sweater",
    description: "Ethically sourced merino wool from certified farms with mulesing-free practices",
    image: "/placeholder.svg?height=400&width=400",
    sustainabilityRating: 7,
    materials: "100% Mulesing-Free Merino Wool",
    origin: "New Zealand",
    providerUrl: "https://example-wool-brand.com/merino-sweater",
    price: "$95.00",
  },
]
