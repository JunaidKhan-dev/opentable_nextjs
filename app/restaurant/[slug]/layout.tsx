import React from "react"

import Header from "@/app/restaurant/components/Header"

export const metadata = {
  title: "Restaurant Name | OpenTableNext",
}

function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  )
}

export default RestaurantLayout
