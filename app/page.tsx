import { Inter } from "@next/font/google"

import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home(Props: any) {
  return (
    <main className={styles.main}>
      <h1>Next 13</h1>
    </main>
  )
}
