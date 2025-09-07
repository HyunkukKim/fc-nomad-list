"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, DollarSign, Thermometer, Star } from "lucide-react"

type Continent = "all" | "Asia" | "Europe" | "North America" | "South America" | "Africa" | "Middle East" | "Oceania"

interface City {
  id: number
  name: string
  nameEn: string
  country: string
  countryEn: string
  continent: Continent
  image: string
  monthlyCost: number
  internetSpeed: number
  temperature: number
  overallScore: number
  rank: number
}

const cities: City[] = [
  {
    id: 1,
    name: "방콕",
    nameEn: "Bangkok",
    country: "태국",
    countryEn: "Thailand",
    continent: "Asia",
    image: "/city/bangkok.jpg",
    monthlyCost: 1561,
    internetSpeed: 25,
    temperature: 31,
    overallScore: 4.2,
    rank: 1,
  },
  {
    id: 2,
    name: "창구",
    nameEn: "Canggu",
    country: "인도네시아",
    countryEn: "Indonesia",
    continent: "Asia",
    image: "/city/canggu.jpg",
    monthlyCost: 1900,
    internetSpeed: 25,
    temperature: 27,
    overallScore: 4.1,
    rank: 2,
  },
  {
    id: 3,
    name: "치앙마이",
    nameEn: "Chiang Mai",
    country: "태국",
    countryEn: "Thailand",
    continent: "Asia",
    image: "/city/chiang-mai.jpg",
    monthlyCost: 1131,
    internetSpeed: 20,
    temperature: 30,
    overallScore: 4.0,
    rank: 3,
  },
  {
    id: 4,
    name: "쿠알라룸푸르",
    nameEn: "Kuala Lumpur",
    country: "말레이시아",
    countryEn: "Malaysia",
    continent: "Asia",
    image: "/city/kuala-lumpur.jpg",
    monthlyCost: 1446,
    internetSpeed: 17,
    temperature: 28,
    overallScore: 3.9,
    rank: 4,
  },
  {
    id: 5,
    name: "런던",
    nameEn: "London",
    country: "영국",
    countryEn: "United Kingdom",
    continent: "Europe",
    image: "/city/london.jpg",
    monthlyCost: 6033,
    internetSpeed: 22,
    temperature: 17,
    overallScore: 3.8,
    rank: 5,
  },
  {
    id: 6,
    name: "멕시코시티",
    nameEn: "Mexico City",
    country: "멕시코",
    countryEn: "Mexico",
    continent: "North America",
    image: "/city/mexico-city.jpg",
    monthlyCost: 1971,
    internetSpeed: 13,
    temperature: 21,
    overallScore: 3.7,
    rank: 6,
  },
  {
    id: 7,
    name: "리스본",
    nameEn: "Lisbon",
    country: "포르투갈",
    countryEn: "Portugal",
    continent: "Europe",
    image: "/city/lisbon.jpg",
    monthlyCost: 4259,
    internetSpeed: 27,
    temperature: 24,
    overallScore: 3.6,
    rank: 7,
  },
  {
    id: 8,
    name: "서울",
    nameEn: "Seoul",
    country: "한국",
    countryEn: "South Korea",
    continent: "Asia",
    image: "/city/seoul.jpg",
    monthlyCost: 2650,
    internetSpeed: 33,
    temperature: 26,
    overallScore: 3.5,
    rank: 8,
  },
  {
    id: 9,
    name: "도쿄",
    nameEn: "Tokyo",
    country: "일본",
    countryEn: "Japan",
    continent: "Asia",
    image: "/city/tokyo.jpg",
    monthlyCost: 3104,
    internetSpeed: 27,
    temperature: 27,
    overallScore: 3.4,
    rank: 9,
  },
  {
    id: 10,
    name: "베를린",
    nameEn: "Berlin",
    country: "독일",
    countryEn: "Germany",
    continent: "Europe",
    image: "/city/berlin.jpg",
    monthlyCost: 4518,
    internetSpeed: 25,
    temperature: 26,
    overallScore: 3.3,
    rank: 10,
  },
  {
    id: 11,
    name: "트빌리시",
    nameEn: "Tbilisi",
    country: "조지아",
    countryEn: "Georgia",
    continent: "Europe",
    image: "/city/tbilisi.jpg",
    monthlyCost: 2271,
    internetSpeed: 14,
    temperature: 30,
    overallScore: 3.2,
    rank: 11,
  },
  {
    id: 12,
    name: "포르투",
    nameEn: "Porto",
    country: "포르투갈",
    countryEn: "Portugal",
    continent: "Europe",
    image: "/city/porto.jpg",
    monthlyCost: 3202,
    internetSpeed: 24,
    temperature: 22,
    overallScore: 3.1,
    rank: 12,
  },
]

interface CityGridProps {
  selectedContinent?: Continent
}

export function CityGrid({ selectedContinent = "all" }: CityGridProps) {
  const [filteredCities, setFilteredCities] = useState<City[]>(cities)

  useEffect(() => {
    if (selectedContinent === "all") {
      setFilteredCities(cities)
    } else {
      setFilteredCities(cities.filter((city) => city.continent === selectedContinent))
    }
  }, [selectedContinent])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">추천 도시 목록</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            디지털 노마드들이 선택한 최고의 도시들을 살펴보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCities.map((city) => (
            <Card
              key={city.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-border"
            >
              <div className="relative">
                <img
                  src={city.image || "/placeholder.svg"}
                  alt={`${city.name}, ${city.country}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-background/90 text-foreground font-medium">
                    #{city.rank}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary/90 text-primary-foreground flex items-center gap-1 font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    {city.overallScore}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-foreground text-balance">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">{city.country}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>월 생활비</span>
                    </div>
                    <span className="font-medium text-foreground">{formatCurrency(city.monthlyCost)}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Wifi className="w-4 h-4" />
                      <span>인터넷 속도</span>
                    </div>
                    <span className="font-medium text-foreground">{city.internetSpeed}Mbps</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Thermometer className="w-4 h-4" />
                      <span>현재 기온</span>
                    </div>
                    <span className="font-medium text-foreground">{city.temperature}°C</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">선택한 대륙에 해당하는 도시가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}
