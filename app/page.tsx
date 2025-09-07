"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ContinentFilter } from "@/components/continent-filter"
import { CityGrid } from "@/components/city-grid"
import { Footer } from "@/components/footer"

type Continent = "all" | "Asia" | "Europe" | "North America" | "South America" | "Africa" | "Middle East" | "Oceania"

export default function HomePage() {
  const [selectedContinent, setSelectedContinent] = useState<Continent>("all")

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContinentFilter onFilterChange={setSelectedContinent} />
      <div data-city-grid>
        <CityGrid selectedContinent={selectedContinent} />
      </div>
      <Footer />
    </main>
  )
}
