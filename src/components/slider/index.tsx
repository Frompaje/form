'use client'

import { useState } from 'react'
import { MovieCard } from '../movieCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export const SliderMovie = () => {
  const [currentStepInitial, setCurrentStepInitial] = useState(0)
  const [currentStepFinal, setCurrentStepFinal] = useState(2)

  const nextStateImg = () => {
    if (currentStepFinal === 4 || currentStepInitial === 2) {
      return
    }

    setCurrentStepInitial(currentStepInitial + 1)
    setCurrentStepFinal(currentStepFinal + 1)
  }

  const prevStateImg = () => {
    if (currentStepInitial === 0) {
      return
    }

    setCurrentStepInitial(currentStepInitial - 1)
    setCurrentStepFinal(currentStepFinal - 1)
  }

  return (
    <>
      <div>
        <div>
          <MovieCard
            currentStepInitial={currentStepInitial}
            currentStepFinal={currentStepFinal}
          />
        </div>

        <Button
          disabled={currentStepInitial === 0}
          onClick={prevStateImg}
          className="absolute  bottom-[73%] left-5 text-2xl rounded-lg p-2 bg-emerald-500/100 text-white cursor-pointer scale-110"
        >
          <ArrowLeft />
        </Button>
        <Button
          disabled={currentStepFinal === 4}
          onClick={nextStateImg}
          className="absolute bottom-[73%]  right-5 text-2xl rounded-lg p-2 bg-emerald-500/100 text-white cursor-pointer scale-110"
        >
          <ArrowRight />
        </Button>
      </div>
    </>
  )
}
