import Head from 'next/head'
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gernot Ohner | Software Developer</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Contact/>
      </main>
    </div>
  )
}
