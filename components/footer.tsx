import { Heart, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">노마드 리스트</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              디지털 노마드를 위한 최고의 도시 정보를 제공합니다. 전 세계 어디서든 자유롭게 일하고 살아가세요.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <div className="space-y-3">
              <a
                href="mailto:silsil@gmail.com"
                className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                silsil@gmail.com
              </a>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                대한민국
              </div>
              <a
                href="tel:+82-10-1213112"
                className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                82-10-1213112
              </a>
            </div>
          </div>

          {/* Data Source Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">데이터 출처</h4>
            <p className="text-primary-foreground/80 mb-2">
              Data from{" "}
              <a
                href="https://nomads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Nomads.com
              </a>
            </p>
            <p className="text-sm text-primary-foreground/60">정보는 정기적으로 업데이트됩니다</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current text-red-400" />
              <span>for Korean Nomads</span>
            </div>

            <div className="text-sm text-primary-foreground/60">© 2025 노마드 리스트. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
