"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Continent = "all" | "Asia" | "Europe" | "North America" | "South America" | "Africa" | "Middle East" | "Oceania"

interface ContinentOption {
  id: Continent
  name: string
  emoji: string
}

const continents: ContinentOption[] = [
  { id: "all", name: "전체", emoji: "🌍" },
  { id: "Asia", name: "아시아", emoji: "🌏" },
  { id: "Europe", name: "유럽", emoji: "🇪🇺" },
  { id: "North America", name: "북미", emoji: "🌎" },
  { id: "South America", name: "남미", emoji: "🌎" },
  { id: "Africa", name: "아프리카", emoji: "🌍" },
  { id: "Middle East", name: "중동", emoji: "🕌" },
  { id: "Oceania", name: "오세아니아", emoji: "🏄" },
]

interface ContinentFilterProps {
  onFilterChange?: (continent: Continent) => void
}

export function ContinentFilter({ onFilterChange }: ContinentFilterProps) {
  const [selectedContinent, setSelectedContinent] = useState<Continent>("all")

  const handleContinentSelect = (continent: Continent) => {
    setSelectedContinent(continent)
    onFilterChange?.(continent)

    const cityGrid = document.querySelector("[data-city-grid]")
    if (cityGrid) {
      cityGrid.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="continent-filter" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">대륙별로 탐색하기</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            원하는 대륙을 선택하여 디지털 노마드에게 최적화된 도시들을 찾아보세요
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {continents.map((continent) => (
            <Button
              key={continent.id}
              variant={selectedContinent === continent.id ? "default" : "outline"}
              size="lg"
              className={`
                flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium
                transition-all duration-200 hover:scale-105
                ${
                  selectedContinent === continent.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                }
              `}
              onClick={() => handleContinentSelect(continent.id)}
            >
              <span className="text-lg">{continent.emoji}</span>
              <span>{continent.name}</span>
            </Button>
          ))}
        </div>

        {/* Filter Status Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {selectedContinent === "all"
              ? "모든 대륙의 도시를 표시하고 있습니다"
              : `${continents.find((c) => c.id === selectedContinent)?.name} 도시를 표시하고 있습니다`}
          </p>
        </div>
      </div>
    </section>
  )
}
