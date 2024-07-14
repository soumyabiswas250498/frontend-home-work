
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/constant";



export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        LoginApi: builder.mutation({
            query: (loginData) => ({
                url: "/users/login",
                method: 'POST',
                body: loginData,
                credentials: 'include'
            }),
        }),
        AllHW: builder.query({
            query: (params) => {
                const queryString = new URLSearchParams(params).toString();
                return `/homework/all?${queryString}`
            }
        })
    })
})


export const { useLoginApiMutation, useAllHWQuery } = api