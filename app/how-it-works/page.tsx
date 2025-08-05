import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Camera,
  Scissors,
  Search,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  CheckCircle,
  Leaf,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Photo",
      description: "Take a clear photo of your clothing item with good lighting and upload it to our platform.",
      icon: Camera,
      color: "from-green-500 to-green-600",
      tips: [
        "Use natural lighting when possible",
        "Lay the item flat or hang it straight",
        "Avoid cluttered backgrounds",
        "Ensure the item fills most of the frame",
      ],
      details:
        "Our AI works best with high-quality images. Make sure your clothing item is the main focus of the photo.",
    },
    {
      number: "02",
      title: "Crop & Adjust",
      description: "Use our intuitive cropping tool to focus on the clothing item and optimize the image for analysis.",
      icon: Scissors,
      color: "from-blue-500 to-blue-600",
      tips: [
        "Center the clothing in the frame",
        "Crop out unnecessary background",
        "Use the zoom feature for better focus",
        "Preview before confirming",
      ],
      details: "Our cropping tool helps you highlight the most important parts of your garment for accurate analysis.",
    },
    {
      number: "03",
      title: "AI Analysis",
      description: "Our advanced AI analyzes materials, production methods, brand practices, and environmental impact.",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      tips: [
        "Analysis takes 2-3 seconds",
        "Based on verified data sources",
        "Considers multiple sustainability factors",
        "Updated with latest industry standards",
      ],
      details:
        "We use machine learning trained on thousands of garments and sustainability databases from Good On You and Fashion Revolution.",
    },
    {
      number: "04",
      title: "Discover Alternatives",
      description:
        "Explore three carefully curated sustainable alternatives with detailed information and direct shopping links.",
      icon: Search,
      color: "from-orange-500 to-orange-600",
      tips: [
        "Curated from trusted sustainable brands",
        "Similar style and function to your item",
        "Detailed sustainability breakdown",
        "Direct links to verified retailers",
      ],
      details:
        "We partner with verified sustainable fashion brands that meet strict environmental and ethical standards.",
    },
    {
      number: "05",
      title: "Make Impact",
      description: "Shop sustainably through our trusted partners and track your positive environmental impact.",
      icon: ExternalLink,
      color: "from-teal-500 to-teal-600",
      tips: [
        "Secure checkout with trusted retailers",
        "Support ethical fashion brands",
        "Track your CO₂ savings",
        "Join our sustainability community",
      ],
      details:
        "Every sustainable choice you make contributes to a better future for our planet and fashion industry workers.",
    },
  ]

  const analysisFactors = [
    {
      title: "Materials & Fabrics",
      description:
        "We analyze the sustainability of materials used, including organic cotton, recycled fibers, and innovative eco-materials.",
      icon: Leaf,
      color: "from-green-500 to-green-600",
      factors: [
        "Organic and natural fibers",
        "Recycled and upcycled materials",
        "Low-impact dyes and chemicals",
        "Biodegradable components",
      ],
    },
    {
      title: "Production Methods",
      description:
        "Assessment of manufacturing processes, energy usage, water consumption, and waste management practices.",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      factors: [
        "Renewable energy usage",
        "Water conservation techniques",
        "Waste reduction programs",
        "Carbon footprint optimization",
      ],
    },
    {
      title: "Labor Conditions",
      description: "Evaluation of worker rights, fair wages, safe working conditions, and ethical labor practices.",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      factors: [
        "Fair wage standards",
        "Safe working environments",
        "No child labor policies",
        "Gender equality initiatives",
      ],
    },
    {
      title: "Environmental Impact",
      description: "Comprehensive analysis of the garment's lifecycle impact on air, water, soil, and biodiversity.",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      factors: [
        "Carbon emissions reduction",
        "Water pollution prevention",
        "Biodiversity protection",
        "Circular economy principles",
      ],
    },
  ]

  const faqs = [
    {
      question: "How do you find sustainable alternatives?",
      answer:
        "We partner with verified sustainable fashion brands that meet strict environmental and ethical criteria. Our curation process involves evaluating certifications, transparency reports, and third-party sustainability assessments to ensure we only recommend truly sustainable options.",
    },
    {
      question: "What happens to my uploaded images?",
      answer:
        "Your privacy is our priority. Images are processed temporarily for analysis only and are automatically deleted from our servers within 24 hours. We never store, share, or use your images for any other purpose.",
    },
    {
      question: "How do you select the 3 alternatives shown?",
      answer:
        "Our AI matches your uploaded item with similar sustainable alternatives based on style, function, and material type. We then select the top 3 options that best match your item while meeting our strict sustainability criteria.",
    },
    {
      question: "Can I analyze any type of clothing?",
      answer:
        "Our AI is trained to analyze most common clothing items including shirts, pants, dresses, jackets, and accessories. For best results, ensure the item is clearly visible and well-lit in your photo.",
    },
    {
      question: "Is the service really free?",
      answer:
        "Yes! Our sustainability analysis is completely free. We earn a small commission when you purchase through our partner links, which helps us keep the service free and continuously improve our platform.",
    },
    {
      question: "How often are alternatives updated?",
      answer:
        "We update our sustainable alternatives database monthly with new products from our partner brands. We also regularly review and refresh our selection to ensure we're always showing the best available options.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="h-4 w-4 mr-2" />
              Step by Step Guide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover sustainable fashion alternatives in just a few simple steps. Our process is designed to be quick,
              accurate, and user-friendly.
            </p>
          </div>

          {/* Steps Section */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="flex items-center mb-8">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mr-6 shadow-lg`}
                        >
                          <step.icon className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-2">Step {step.number}</div>
                          <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                      <p className="text-gray-700 mb-8 font-medium">{step.details}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-4">Pro Tips:</h4>
                        {step.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`bg-gradient-to-br ${step.color} flex items-center justify-center p-16 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
                        <step.icon className="h-20 w-20 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analysis Factors Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Analyze</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive analysis covers multiple sustainability factors to find the best alternatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {analysisFactors.map((factor, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${factor.color} rounded-full flex items-center justify-center mr-4`}
                      >
                        <factor.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{factor.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{factor.description}</p>

                    <div className="space-y-2">
                      {factor.factors.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about finding sustainable alternatives
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <HelpCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of users who are already making more sustainable fashion choices. Upload your first item
                and discover better alternatives today.
              </p>
              <Link href="/">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
                >
                  Start Analyzing Now →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
