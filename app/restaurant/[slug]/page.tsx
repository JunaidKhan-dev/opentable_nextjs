import Navbar from "@/app/components/Navbar"
import Description from "@/app/restaurant/components/Description"
import Header from "@/app/restaurant/components/Header"
import Images from "@/app/restaurant/components/Images"
import Rating from "@/app/restaurant/components/Rating"
import ReservationCard from "@/app/restaurant/components/ReservationCard"
import RestaurantNavbar from "@/app/restaurant/components/RestaurantNavbar"
import Reviews from "@/app/restaurant/components/Reviews"
import Title from "@/app/restaurant/components/Title"

export default function RestaurantPage(Props: any) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  )
}
