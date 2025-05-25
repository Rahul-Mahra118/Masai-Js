import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMatchDetailes = createAsyncThunk(
  "matches/fetchMatchDetailes",
  async () => {
    const response = await fetch(
      "https://footballdata-b9944-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
    );
    const data = await response.json();
    console.log(data);
    const matchData = Object.entries(data).map(([id, data]) => ({
      id: data.matchId,
      data,
    }));
    console.log(matchData)
  
    return matchData;
  }
);

const initialState = {
  isLoading: false,
  isError: null,
  footballMatches: [],
  favMatches:[]

};

const sportsSlice = createSlice({
  name: "matches",
  initialState,
  reducers:{
    addFav:(state,action)=>{
      const selectMatch= state.footballMatches.find(match=>match.data.matchId==action.payload);
      state.favMatches.push(selectMatch)
      console.log(selectMatch)
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchDetailes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMatchDetailes.fulfilled, (state, action) => {
        state.footballMatches = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMatchDetailes.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});

export default sportsSlice.reducer;

export const{addFav
}= sportsSlice.actions