// import { MovieService } from '@/services/movie'
// import { useQuery } from '@tanstack/react-query'
// import { SkeletonCard } from '../skeletonCard'
// import { Movie, MovieResponse } from '@/types/movie'
// import { MovieCard } from '../movieCard'
// import { useState } from 'react'
// import { ArrowLeft, ArrowRight } from 'lucide-react'

// export const Slider = () => {
//   const [currentStepFinal, setCurrentStepFinal] = useState(0)
//   const [currentStep, setCurrentStep] = useState(1)

//   const { data, isLoading } = useQuery<MovieResponse>({
//     queryKey: ['movies'],
//     queryFn: () => MovieService.listAllMovies(),
//     staleTime: 1000 * 60 * 5, // 5 minutes cache
//   })

//   const nextStateImg = () => {
//     if (currentStep > 4) {
//       return
//     }
//     setCurrentStep(currentStep + 1)
//     setCurrentStepFinal(currentStepFinal + 1)
//   }

//   const prevStateImg = () => {
//     if (currentStep === 1) {
//       return
//     }

//     setCurrentStep(currentStep - 1)
//     setCurrentStepFinal(currentStepFinal - 1)
//   }

//   return (
//     <>
//       <div className="max-w-4[1400px] h-[780px] w-1/3 m-auto py-16 px-4 relative">
//         <div className="h-full duration-500 bg-center bg-cover rounded-2xl">
//           {data?.results
//             .slice(currentStepFinal, currentStep)
//             .map((movie) => (
//               <MovieCard
//                 poster_path={movie.poster_path}
//                 title={movie.title}
//                 key={movie.title}
//               />
//             ))}
//         </div>
//         <div
//           onClick={prevStateImg}
//           className="absolute bottom-[65%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//         >
//           <ArrowLeft />
//         </div>
//         <div
//           onClick={nextStateImg}
//           className="absolute bottom-[65%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//         >
//           <ArrowRight />
//         </div>
//       </div>
//       <div>{isLoading && <SkeletonCard />}</div>
//     </>
//   )
// }
