import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription";
import { lazy, Suspense } from "react";
import Loading from "./Components/Loading";
import LoadingFullPage from "./Components/LoadingFullPage";
import Item from "./Components/Item";

// import Products from "./Pages/Products"
// import HomePage from "./Pages/HomePage"
// import AboutPage from "./Pages/AboutPage"
// import PageNotFound from "./Pages/PageNotFound"

const HomePage = lazy(() => import("./Pages/HomePage"));
const Products = lazy(() => import("./Pages/Products"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

// dist/index.html                   0.46 kB │ gzip:  0.29 kB
// dist/assets/index-gyd8llQh.css    0.55 kB │ gzip:  0.31 kB
// dist/assets/index-DipykCfe.js   227.51 kB │ gzip: 73.50 kB

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFullPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<Item />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
