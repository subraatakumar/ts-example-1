import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type RatingType = {
  rate: number;
  count: number;
};

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

type InitialStateType = {
  data: ProductType[];
  loading: boolean;
  error: string;
};

const initialState: InitialStateType = {
  data: [],
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default productSlice.reducer;
export const {} = productSlice.actions;
