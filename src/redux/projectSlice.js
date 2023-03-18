import { createSlice } from '@reduxjs/toolkit'



//import type { PayloadAction } from '@reduxjs/toolkit'



export const projectSlice = createSlice({
  name: 'counter',
  initialState : {
    projects: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
  },
  reducers: {
    tlp : (state) => {
      return state
    }
  }


})

export const { increment, decrement, incrementByAmount } = projectSlice.actions

export default projectSlice.reducer

// increment: (state) => {
     
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action ) => {
    //   state.value += action.payload
    // },