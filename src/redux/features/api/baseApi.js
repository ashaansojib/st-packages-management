import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9988'
    }),
    tagTypes: ['packages'],
    endpoints: (builder) => ({
        getPackages: builder.query({
            query: () => '/packages',
            providesTags: ["packages"]
        }),
        setPackage: builder.mutation({
            query: (data) => ({
                url: '/packages',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["packages"]
        }),
        removeCombo: builder.mutation({
            query: (id) => ({
                url: `/delete-combo/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["packages"]
        }),
    }),
});
export const { useGetPackagesQuery, useSetPackageMutation, useRemoveComboMutation } = baseApi;
export default baseApi;