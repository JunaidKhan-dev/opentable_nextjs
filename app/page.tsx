import Header from "@/app/components/Header"
import RestaurantCard from "@/app/components/RestaurantCard"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home(Props: any) {
  return (
    <main>
      <Header />
      <div className="cards py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  )
}
