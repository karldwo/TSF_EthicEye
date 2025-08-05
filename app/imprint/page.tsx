import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Mail } from "lucide-react"

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Notice</h1>
            <p className="text-xl text-gray-600">Company information and legal details</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>EthicEye Technologies Inc.</strong>
                    </p>
                    <p>Sustainable Fashion Solutions</p>
                    <p>123 Green Street</p>
                    <p>San Francisco, CA 94102</p>
                    <p>United States</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Email:</strong> hello@ethiceye.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Mon-Fri 9AM-6PM PST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Information</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>CEO:</strong> Sarah Chen
                    <br />
                    <strong>Registration:</strong> Delaware Corporation
                    <br />
                    <strong>Tax ID:</strong> 12-3456789
                  </p>
                  <p>
                    <strong>Disclaimer:</strong> The content on this website has been created with care. However, we
                    cannot guarantee the accuracy, completeness, or timeliness of the information provided.
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
