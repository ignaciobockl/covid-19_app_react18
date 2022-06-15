import { createSlice } from '@reduxjs/toolkit';



export const continentSlice = createSlice({
    name: 'continent',
    initialState: {
        value: 'World',
    },
    reducers: {
        changeContinent: (state, action) => {
            console.log("🚀 ~ file: continentSlice.js ~ line 12 ~ state", state)
            console.log("🚀 ~ file: continentSlice.js ~ line 12 ~ action", action)
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeContinent } = continentSlice.actions;

export default continentSlice.reducer;