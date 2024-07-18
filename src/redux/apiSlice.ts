
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/constant";



export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: base_url, credentials: 'include' }),
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
        }),
        addHomework: builder.mutation({
            query: (addData) => ({
                url: `/homework/add`,
                method: 'POST',
                body: addData,
                credentials: 'include'
            }),
        }),
        editHomework: builder.mutation({
            query: ({ id, editData }) => ({
                url: `/homework/update?id=${id}`,
                method: 'PUT',
                body: editData,
                credentials: 'include'
            }),
        }),
        deleteHomework: builder.mutation({
            query: (id) => ({
                url: `/homework/delete?id=${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
        }),
        AllUsers: builder.query({
            query: () => {
                return `/users/all`
            }
        }),
        addUser: builder.mutation({
            query: (addData) => ({
                url: `/users/add`,
                method: 'POST',
                body: addData,
                credentials: 'include'
            }),
        }),
        editUser: builder.mutation({
            query: ({ id, editData }) => ({
                url: `/users/update?id=${id}`,
                method: 'PUT',
                body: editData,
                credentials: 'include'
            }),
        }),
    })
})


export const { useLoginApiMutation, useAllHWQuery, useEditHomeworkMutation, useDeleteHomeworkMutation, useAddHomeworkMutation, useAllUsersQuery, useEditUserMutation, useAddUserMutation } = api