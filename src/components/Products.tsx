import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts } from "../redux/slices/productSlice";

function Products() {
  const dispatch: AppDispatch = useDispatch();
  const { datas, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  console.log(error, error.length);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error.length > 0) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      {datas.map((data, index) => (
        <p key={index}>{data.title}</p>
      ))}
    </div>
  );
}

export default Products;
