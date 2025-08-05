import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Trash2 } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Privacy Matters</h1>
            <p className="text-xl text-gray-600">
              We're committed to protecting your privacy and being transparent about how we handle your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">What We Collect</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Images you upload (temporarily only)</li>
                  <li>• Basic usage analytics</li>
                  <li>• No personal information required</li>
                  <li>• No account creation necessary</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Automatic Deletion</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Images deleted within 24 hours</li>
                  <li>• No permanent storage of uploads</li>
                  <li>• Processing happens in real-time</li>
                  <li>• No backup copies created</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Privacy Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Image Processing</h3>
                  <p className="text-gray-600">
                    When you upload images, they are processed temporarily for analysis purposes only. Images are
                    automatically deleted from our servers within 24 hours and are never shared with third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-gray-600">
                    We collect basic, anonymized usage statistics to improve our service. This includes general usage
                    patterns but no personally identifiable information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies</h3>
                  <p className="text-gray-600">
                    We use essential cookies only to ensure proper website functionality. No tracking or advertising
                    cookies are used.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                  <p className="text-gray-600">
                    You have the right to know what data we process, request deletion of any data, and contact us with
                    privacy concerns at any time.
                  </p>
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
