import Description from "@/app/restaurant/components/Description"
import Images from "@/app/restaurant/components/Images"
import Rating from "@/app/restaurant/components/Rating"
import ReservationCard from "@/app/restaurant/components/ReservationCard"
import RestaurantNavbar from "@/app/restaurant/components/RestaurantNavbar"
import Reviews from "@/app/restaurant/components/Reviews"
import Title from "@/app/restaurant/components/Title"

export default function RestaurantPage(Props: any) {
  return (
    <>
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
    </>
  )
}
