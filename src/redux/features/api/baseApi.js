import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://st-server-6izx09ybm-ashaansojib.vercel.app'
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
        payments: builder.mutation({
            query: (pay) => ({
                url: '/payment',
                method: 'POST',
                body: pay,
            }),
            invalidatesTags: ["packages"]
        }),
        getPaymentItem: builder.query({
            query: () => '/payment',
            providesTags: ["packages"]
        })
    }),
});
export const { useGetPackagesQuery, useSetPackageMutation, useRemoveComboMutation, usePaymentsMutation, useGetPaymentItemQuery } = baseApi;
export default baseApi;