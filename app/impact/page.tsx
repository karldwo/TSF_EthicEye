import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Droplets, Recycle, TrendingUp, Heart, Award, Globe } from "lucide-react"

export default function ImpactPage() {
  const stats = [
    {
      number: "47,892",
      label: "Items Analyzed",
      description: "Clothing pieces scanned for sustainability",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      number: "12,340 kg",
      label: "CO₂ Saved",
      description: "Through sustainable alternative choices",
      icon: Leaf,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "2.8M L",
      label: "Water Conserved",
      description: "Less water usage through conscious choices",
      icon: Droplets,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      number: "18,567",
      label: "Sustainable Purchases",
      description: "Eco-friendly alternatives chosen",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
    },
  ]

  const impactAreas = [
    {
      title: "Environmental Protection",
      description:
        "Reducing carbon emissions, water usage, and chemical pollution through sustainable material choices.",
      icon: Leaf,
      color: "from-green-500 to-green-600",
      benefits: [
        "67% reduction in CO₂ emissions",
        "45% less water consumption",
        "Elimination of harmful chemicals",
        "Protection of biodiversity",
      ],
    },
    {
      title: "Ethical Labor Practices",
      description: "Supporting brands that ensure fair wages, safe working conditions, and worker rights.",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      benefits: [
        "Fair wages for all workers",
        "Safe working environments",
        "No child labor policies",
        "Gender equality initiatives",
      ],
    },
    {
      title: "Circular Economy",
      description: "Promoting recycling, upcycling, and durable products for a sustainable fashion ecosystem.",
      icon: Recycle,
      color: "from-purple-500 to-purple-600",
      benefits: [
        "Recycled and renewable materials",
        "Durable, long-lasting products",
        "Repair and upcycling programs",
        "Waste reduction initiatives",
      ],
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
              <Globe className="h-4 w-4 mr-2" />
              Global Impact
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Together, We Make a{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Difference
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every scan counts. Every sustainable choice matters. Here's the positive impact our community is creating
              for people and the planet.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Positive Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{area.title}</h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{area.description}</p>
                    <ul className="space-y-3">
                      {area.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Environmental Comparison */}
          <Card className="mb-16 bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Your Choices Create Real Change</h2>
                <p className="text-green-100 text-lg max-w-2xl mx-auto">
                  When you choose sustainable alternatives, you're contributing to measurable environmental improvements
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">-67%</div>
                  <div className="text-green-100">CO₂ emissions reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">-45%</div>
                  <div className="text-green-100">water usage decrease</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">+100%</div>
                  <div className="text-green-100">ethical production support</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Growing Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-8 border-gray-200 relative">
                      <div className="w-24 h-24 rounded-full border-8 border-t-transparent border-green-500 absolute top-0 left-0 transform rotate-[306deg]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">85%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">User Satisfaction</h3>
                  <p className="text-sm text-gray-600">Positive feedback from our community</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-8 border-gray-200 relative">
                      <div className="w-24 h-24 rounded-full border-8 border-t-transparent border-blue-500 absolute top-0 left-0 transform rotate-[259deg]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">72%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sustainable Purchases</h3>
                  <p className="text-sm text-gray-600">Users who chose eco-friendly alternatives</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-8 border-gray-200 relative">
                      <div className="w-24 h-24 rounded-full border-8 border-t-transparent border-purple-500 absolute top-0 left-0 transform rotate-[331deg]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">92%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Awareness Increase</h3>
                  <p className="text-sm text-gray-600">Improved sustainability consciousness</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Motivation Section */}
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center shadow-xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <Award className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
                <h2 className="text-3xl font-bold mb-6">
                  Every Scan Counts. Together, We Build a More Sustainable Fashion World.
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Your conscious decisions inspire others and create a ripple effect of positive change throughout the
                  fashion industry. Together, we're proving that sustainable choices can be both accessible and
                  impactful.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">+25%</div>
                    <p className="text-gray-400 text-sm">Monthly growth in users</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">96%</div>
                    <p className="text-gray-400 text-sm">Would recommend to friends</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">24/7</div>
                    <p className="text-gray-400 text-sm">Always available for you</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
