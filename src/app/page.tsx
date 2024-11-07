import { Header } from '@/components/header'
import { MovieCard } from '@/components/movieCard'

export default function Home() {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <Header />
        <MovieCard />
      </div>
    </>
  )
}
