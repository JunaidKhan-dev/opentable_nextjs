import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar"
import RestaurantCard from "@/app/components/RestaurantCard"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home(Props: any) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="cards py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  )
}
