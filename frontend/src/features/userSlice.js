import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addNotification: (state, { payload }) => { },
        resetNotification: (state, { payload }) => { },
    },

    extraReducers: (builder) => {
        //save user after signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, { payload }) => payload)
    }
});