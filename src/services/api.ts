import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../models/Restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetCardapioQuery } = api
export default api
