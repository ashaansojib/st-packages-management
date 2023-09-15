import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9988'
    }),
    endpoints: (builder) => ({
        getPackages: builder.query({
            query: '/packages'
        }),
        setPackage: builder.mutation({
            query: (post) =>({
                url: '/packages',
                method: 'POST',
                body: post,
            }),
        }),
    }),
});
export const { useGetPackagesQuery, useSetPackageMutation } = baseApi;
export default baseApi;