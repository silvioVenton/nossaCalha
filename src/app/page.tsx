// app/page.tsx
import Carousel from "../../components/Carousel"
import SectionTelhado from "../../components/SectionTelhado";
import TelhasGrid from "../../components/TelhasGrid";
import TelhaFibrocimento from "../../components/TelhaFibrocimento";
import TelhaMetalica from "../../components/TelhaMetalica";
import TelhaTermoacustica from "../../components/TelhaTermoacustica";

export default function Home() {
 
  return (
    <main className="max-w-12xl mx-auto py-8">
      <Carousel />
      <TelhasGrid />
      <SectionTelhado/>
      <TelhaFibrocimento/>
      <TelhaMetalica/>
      <TelhaTermoacustica/>
    </main>
  )
}
