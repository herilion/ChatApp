import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//define a service user a base URL

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: (builder) => ({
        //creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        //login user
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/users/login',
                method: 'POST',
                body: user,
            }),
        }),
        //logout user
        logoutUser: builder.mutation({
            query: (payload) => ({
                url: '/logout',
                method: 'DELETE',
                body: 'payload',
            }),
        }),
    }),
});
export const { useSignupUserMutation, useLoginUserMutation, useLogoutMutation } = appApi;