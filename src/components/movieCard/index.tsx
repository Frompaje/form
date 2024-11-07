import { MoviesService } from '@/services/movies'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export const MovieCard = () => {
  const searchParams = useSearchParams()
  const params = searchParams.get('')

  const { data, isPeding } = useQuery({
    queryKey: ['movies', params],
    queryFn: () => MoviesService.listAllFilms(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
