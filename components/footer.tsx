import Link from "next/link"
import { Leaf, Mail, Globe, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-green-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                EthicEye
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Making sustainable fashion accessible to everyone. Discover eco-friendly alternatives with just a photo
              and join the movement towards conscious consumption.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Privacy First
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                Global Impact
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Explore</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-green-600 transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="block text-gray-600 hover:text-green-600 transition-colors">
                How it Works
              </Link>
              <Link href="/impact" className="block text-gray-600 hover:text-green-600 transition-colors">
                Our Impact
              </Link>
            </div>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal & Contact</h3>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-gray-600 hover:text-green-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/imprint" className="block text-gray-600 hover:text-green-600 transition-colors">
                Legal Notice
              </Link>
              <a
                href="mailto:hello@ethiceye.com"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024 EthicEye. Building a more sustainable future, one choice at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
