import Menu from "@/app/restaurant/components/Menu"
import RestaurantNavbar from "@/app/restaurant/components/RestaurantNavbar"

export default function SearchPage(Props: any) {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar />
      <Menu />
    </div>
  )
}
