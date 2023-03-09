import Card from "@/app/search/components/Card"
import Header from "@/app/search/components/Header"
import SearchSideBar from "@/app/search/components/SearchSideBar"

export const metadata = {
  title: "Search | OpenTableNext",
}

export default function SearchPage(Props: any) {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <Card />
        </div>
      </div>
    </>
  )
}
