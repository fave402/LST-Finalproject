import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../types/product";

const API_URL = "https://dummyjson.com/";

export const productsApi = createApi({
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getBestsellerProducts: builder.query<
      { products: Product[] },
      { limit?: number; skip?: number }
    >({
      query: ({ limit = 10, skip = 0 }) => {
        return `products?limit=${limit}&skip=${skip}`;
      },
    }),
  }),
});

export const {
  useGetBestsellerProductsQuery,
} = productsApi;