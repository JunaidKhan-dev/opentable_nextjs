import Navbar from "@/app/components/Navbar"
import Header from "@/app/restaurant/components/Header"
import Menu from "@/app/restaurant/components/Menu"
import RestaurantNavbar from "@/app/restaurant/components/RestaurantNavbar"

export default function SearchPage(Props: any) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavbar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  )
}
