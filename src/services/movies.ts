'use client'

import axios from 'axios'

export class MoviesService {
  static async listAllFilms() {
    const response = await axios.get('discover/tv')

    return response.data
  }
}
