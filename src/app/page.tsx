import { Header } from '@/components/header'
import { SliderMovie } from '@/components/slider'

export default function Home() {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <Header />
        <SliderMovie />
      </div>
    </>
  )
}
