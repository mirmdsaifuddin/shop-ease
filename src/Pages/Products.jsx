import { useEffect, useState } from "react";
import Product from "../Components/Product";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import PageNavigation from "../Components/PageNavigation";
import AppNavigation from "../Components/AppNavigation";
import { Outlet } from "react-router-dom";
import SearchItem from "../Components/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductsSlice";

function Products() {
  const [search, setSearch] = useState("");

  const { products, loading, error } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // function handleSearch(search) {
  //   setSearch(search);
  //   dispatch(searchProduct(search));
  // }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <>
      <PageNavigation />
      <SearchItem search={search} setSearch={setSearch} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ marginBottom: "20px" }}>
            <Product item={product} key={product.id} />
          </div>
        ))}
      </div>
      <AppNavigation />
      {/* <Outlet /> */}
    </>
  );
}

export default Products;
