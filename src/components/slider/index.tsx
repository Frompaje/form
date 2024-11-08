'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { MovieCard } from '../movieCard'
import { Button } from '../ui/button'

export const SliderMovie = () => {
  const [currentStepSlide, setCurrentStepSlide] = useState(40)

  const nextStateImg = () => {
    if (currentStepSlide === -28) return
    setCurrentStepSlide((prev) => prev - 24)
  }

  const prevStateImg = () => {
    if (currentStepSlide === 40) return
    setCurrentStepSlide((prev) => prev + 24)
  }

  return (
    <>
      <div className="overflow-hidden h-screen">
        <div
          style={{
            transform: `translateX(${currentStepSlide * 4}px)`,
            transition: 'transform 0.5s',
          }}
        >
          <MovieCard
            currentStepInitial={0}
            currentStepFinal={4}
            className={`translate-x-${currentStepSlide} duration-1000 w-full flex scale-150 translate-y-10`}
          />
        </div>

        <Button
          onClick={prevStateImg}
          disabled={currentStepSlide > 8}
          className="absolute  bottom-[78%] left-5 text-2xl rounded-lg p-2 bg-emerald-500/100 text-white cursor-pointer scale-110"
          size="icon"
        >
          <ChevronLeft />
        </Button>
        <Button
          disabled={currentStepSlide < -8}
          onClick={nextStateImg}
          className="absolute bottom-[78%]  right-5 text-2xl rounded-lg p-2 bg-emerald-500/100 text-white cursor-pointer scale-110"
          size="icon"
        >
          <ChevronRight />
        </Button>
      </div>
    </>
  )
}
