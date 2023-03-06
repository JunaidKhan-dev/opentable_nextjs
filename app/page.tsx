import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home(Props: any) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Signin
              </button>
              <button className="border p-1 px-4 rounded">Signup</button>
            </div>
          </div>
        </nav>
        <header className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f46] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Milestone Fast Food (LONDON)
            </h1>
          </div>
        </header>
        {/* description area */}
        <section className="flex m-auto justify-between w-2/3 items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* restaurant navbar */}
            <nav className="text-reg flex border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* restaurant navbar */}
            {/* title */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milestone Fast Food</h1>
            </div>
            {/* title */}
            {/* Rating */}
            <div className="flex items-end">
              <div className="rating mt-2 flex items-center">
                <p>****</p>
                <p className="text-reg ml-3">4.8</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* Rating */}
            {/* description */}
            <div className="mt-4">
              <p className="text-l font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                laboriosam maiores cum atque obcaecati pariatur totam rem
                mollitia ut tempora. Commodi enim molestiae hic architecto autem
                consectetur blanditiis, minus aut.
              </p>
            </div>
            {/* description */}
          </div>
        </section>
        {/* description area */}
      </main>
    </main>
  )
}
