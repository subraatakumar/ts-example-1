import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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

const fetchProducts = createAsyncThunk<ProductType[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const initialState: InitialStateType = {
  data: [],
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.data = [];
        state.loading = false;
        state.error = "Something went wrong.";
      });
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;
