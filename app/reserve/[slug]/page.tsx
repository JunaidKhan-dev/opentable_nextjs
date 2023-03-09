import Form from "@/app/reserve/components/Form"
import Header from "@/app/reserve/components/Header"

export const metadata = {
  title: "Reserve at Restaurant Name | OpenTableNext",
}

export default function ReservePage(Props: any) {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  )
}
