'use client'

import { MoviesService } from '@/services/movies'
import { Movie } from '@/types/movies'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { LoadingSpin } from '../loadingSpin'
import Image from 'next/image'
import Link from 'next/link'

export const MovieCard = () => {
  const searchParams = useSearchParams()
  const params = searchParams.get('')

  const { data, isPending } = useQuery({
    queryKey: ['movies', params],
    queryFn: () => MoviesService.listAllFilms(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return (
    <div className="grid grid-cols-2 gap-2 p-1 ">
      {isPending && <LoadingSpin />}
      {data &&
        data.results.map((movie: Movie) => (
          <div key={movie.id}>
            <Link href={'/movies'}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width={500}
                height={500}
                className="rounded-lg border-solid hover:border border-emerald-500"
                alt="imagem do filme"
              />
            </Link>
          </div>
        ))}
    </div>
  )
}
