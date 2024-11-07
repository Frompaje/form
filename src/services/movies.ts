import { API } from '@/lib/axios'
import { MovieData } from '@/types/movies'

export class MoviesService {
  static async listAllFilms() {
    const response = await API.get<MovieData>('discover/movie', {
      params: {
        api_key: 'db54934853c9ec1bc9926f2ca56bc80e',
      },
    })
    return response.data
  }
}
