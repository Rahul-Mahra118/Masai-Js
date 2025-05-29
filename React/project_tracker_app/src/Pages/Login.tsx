import { useState, type ChangeEvent, type FormEvent } from "react";
import { type formType } from "../types/types";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  createUser,
  SignInUser,
  toggleIsSignUp,
} from "../features/Projects/UserSlice";

const Login: React.FC = () => {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState<formType>(initialState);
  const dispatch = useAppDispatch();
  const isSignUp = useAppSelector((state) => state.user.isSignUp);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(createUser({ state: formState }));
      console.log("sign up successfully");
    } else {
      dispatch(SignInUser({ state: formState }));
    }

    setFormState(initialState);
  };

  return (
    <>
      <div
        className="flex flex-col justify-center
     items-center h-screen"
      >
        <h2 className="font-stretch-110% font-bold text-4xl p-6">
          {" "}
          Verify Your Identity
        </h2>

        <form
          action=""
          onSubmit={handleFormSubmit}
          className="border p-8 flex flex-col justify-center items-center shadow-md shadow-cyan-500/50 "
        >
          <div className="mb-4 ">
            {isSignUp && (
              <>
                <div className="m-2 flex justify-between">
                  <label htmlFor="name1" className="text-2xl mr-4">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="enter the name"
                    required
                    name="fullName"
                    className="border"
                    id="name1"
                    value={formState.fullName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </>
            )}
            <div className="m-2 flex justify-between">
              <label htmlFor="Email" className="text-2xl mr-4">
                Email:
              </label>
              <input
                type="email"
                placeholder="enter the mail"
                required
                name="email"
                className="border"
                id="Email"
                value={formState.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="m-2 flex justify-between">
              <label htmlFor="password" className="text-2xl mr-4">
                Password:
              </label>
              <input
                type="password"
                placeholder="enter the password"
                required
                name="password"
                className="border"
                id="password"
                value={formState.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className=" rounded-xl px-3 bg-blue-500 ">
            <button className="p-2 pt-2 text-white ">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
        <p>
          {isSignUp ? "Already have an account ?" : "New User?? "}
          <button
            onClick={() => {
              dispatch(toggleIsSignUp());
              setFormState(initialState);
            }}
            className=" text-blue-700 "
          >
            {isSignUp ? "Sign In" : "Create An Account"}
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
