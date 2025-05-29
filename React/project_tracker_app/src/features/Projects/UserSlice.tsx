import {
  createAsyncThunk,
  createSlice,
  //   type PayloadAction,
} from "@reduxjs/toolkit";
import {
  type UserDetails,
  type credType,
  type formType,
} from "../../types/types";
import { signUpUser, signInUser, setUser } from "../../service/authService";

const initialState: UserDetails = {
  uid: "",
  email: "",
  fullName: "",
  isSignUp: true,
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ state }: { state: formType }) => {
    const { fullName, email, password } = state;
    const userDetail = await signUpUser({ email, password });
    console.log(userDetail.user.uid);
    const uid = userDetail.user.uid;

    setUser({ email, fullName, uid });
  }
);
export const SignInUser = createAsyncThunk(
  "users/createUser",
  async ({ state }: { state: credType }) => {
    const { email, password } = state;
    await signInUser({ email, password });
  }
);

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleIsSignUp: (state) => {
      state.isSignUp = !state.isSignUp;
    },

    setUserState: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(createUser.pending, (state) => {})
      .addCase(createUser.fulfilled, (state) => {
        state.isSignUp = false;
      })

      .addCase(createUser.rejected, () => {});
  },
});

export const { toggleIsSignUp, setUserState } = UserSlice.actions;

export default UserSlice.reducer;
