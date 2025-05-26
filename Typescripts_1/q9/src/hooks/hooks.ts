import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";

export const useAppDisPatch =  useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
