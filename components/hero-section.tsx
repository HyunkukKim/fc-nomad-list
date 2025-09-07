"use client"

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("continent-filter")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1280&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop"
      title="노마드 리스트"
      date="디지털 노마드의 여행"
      scrollToExpand="스크롤하여 탐색하기"
      textBlend={false}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
          디지털 노마드를 위한 최고의 도시 찾기
        </h2>
        <p className="text-lg mb-8 text-black dark:text-white">
          전 세계 12개 도시의 생활비, 인터넷 속도, 기온, 전체 점수 등의 정보를 제공하여 
          당신에게 가장 적합한 디지털 노마드 도시를 찾아보세요.
        </p>

        {/* Statistics */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">도시 정보</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">대륙</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">핵심 지표</div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
          onClick={scrollToContent}
        >
          도시 탐색하기
        </Button>

        {/* Scroll Indicator */}
        <div className="mt-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </ScrollExpandMedia>
  )
}