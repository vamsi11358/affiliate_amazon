import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import DetailPage from "./Components/DetailsPage"
import { useState } from "react"
import type { Technology } from "./Components/types"

export default function App() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)

  return (
    <div className="min-h-screen">
      <Header />
      {selectedTech ? (
        <DetailPage 
          technology={selectedTech} 
          onBack={() => setSelectedTech(null)}
        />
      ) : (
        <LandingPage onCardClick={setSelectedTech} />
      )}
    </div>
  )
}