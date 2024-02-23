
import { createSlice } from '@reduxjs/toolkit' 

export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    value: 0,
  },
  reducers: {
    incrementbyvalue: (state , action) => {
        state.value += action.payload
    },
    decrementbyvalue: (state , action) => {
      state.value -= action.payload
  },
    // division: (state) => {
    //     state.value /=2
    // }
  },
})

// Action creators are generated for each case reducer function
export const { incrementbyvalue,decrementbyvalue } = counterSlice.actions

export default counterSlice.reducer