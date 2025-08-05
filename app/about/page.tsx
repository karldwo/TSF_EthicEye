"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Users, Mail, Target, Globe, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Mission: Make Sustainable Fashion{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Accessible
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe everyone deserves access to transparent information about their clothing's environmental
              impact. EthicEye makes sustainable fashion choices simple, accessible, and impactful.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Purpose</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering consumers to make informed, sustainable fashion choices that benefit both people and the
                  planet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use trusted sources like Good On You and Fashion Revolution to provide accurate sustainability
                  ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Together, we're building a community that values ethical production and environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Sarah Chen"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Daniel Pomberg</h3>
                      <p className="text-green-600 font-medium">Founder & Strategy</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Sustainability-focused strategist with 10+ years of fashion experience. Builds accessible eco-solutions through tech and strategy.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Marcus Johnson"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Karl Dwornitschak</h3>
                      <p className="text-green-600 font-medium">Founder & Strategy</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Digital strategist passionate about AI-driven sustainability. Connects design, tech, and environmental impact.
                  </p>
                </CardContent>
              </Card>


              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Sarah Chen"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Moritz Schlüsener</h3>
                      <p className="text-green-600 font-medium">Founder & Tech Lead</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Developer with a passion for scalable green tech. Builds backend systems that power transparency and change.
                  </p>
                </CardContent>
              </Card>


               <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Sarah Chen"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Paul Greuel</h3>
                      <p className="text-green-600 font-medium">Founder & AI Systems</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Tech-savvy developer creating smart tools for sustainability. Merges data, automation, and purpose.
                  </p>
                </CardContent>
              </Card>






            </div>
          </div>

          {/* Data Sources */}
          <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Data Sources</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Good On You</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leading platform for fashion brand sustainability ratings, evaluating environmental impact, labor
                    conditions, and animal welfare.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fashion Revolution</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Global movement for transparency in fashion supply chains, providing comprehensive data on
                    production conditions and brand accountability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <Card className="mb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-300 text-sm">
                    Sustainable fashion information should be free and available to everyone, everywhere.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Accuracy</h3>
                  <p className="text-gray-300 text-sm">
                    We provide reliable, fact-based sustainability assessments from trusted industry sources.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Action</h3>
                  <p className="text-gray-300 text-sm">
                    We don't just inform—we connect you directly with sustainable alternatives to drive real change.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="text-center shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Have questions, suggestions, or want to partner with us? We'd love to hear from you!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                onClick={() => (window.location.href = "mailto:hello@EthicEye.com")}
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@ethiceye.com
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
