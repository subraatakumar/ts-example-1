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
  datas: ProductType[];
  loading: boolean;
  error: string;
};

export const fetchProducts = createAsyncThunk<ProductType[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/pducts");
    return response.data;
  }
);

const initialState: InitialStateType = {
  datas: [],
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
        state.datas = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          state.datas = action.payload;
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.datas = [];
        state.loading = false;
        state.error = "Something went wrong.";
      });
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;
