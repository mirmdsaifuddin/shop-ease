//import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  products: [],
  search: "",
  error: "",
  item: null,
};

export function fetchProducts() {
  return async function (dispatch) {
    try {
      dispatch(loading());
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch..");

      const data = await res.json();
      dispatch(loaded(data));
    } catch (error) {
      dispatch(failed(error.message));
    }
  };
}

export function fetchItem(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: "products/loading" });
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("having issue in fetching item...");
      const data = await res.json();
      dispatch({ type: "products/item", payload: data });
    } catch (error) {
      dispatch(failed(error.message));
    }
  };
}

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    loading(state, action) {
      state.loading = true;
    },
    loaded(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    failed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    item(state, action) {
      state.item = action.payload;
      state.loading = false;
    },
  },
});

export const { loading, loaded, item, failed } = productSlice.actions;
export default productSlice.reducer;

// export function fetchProducts() {
//     return async function (dispatch) {
//       try {
//         dispatch({ type: "products/loading" });
//         const res = await fetch("https://fakestoreapi.com/products");
//         if (!res.ok) throw new Error("Failed to fetch..");

//         const data = await res.json();
//         //console.log(data);
//         dispatch({ type: "products/loaded", payload: data });
//       } catch (error) {
//         dispatch({ type: "products/failed", payload: error.message });
//       }
//     };
//   }
// export default function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case "products/loading":
//       return { ...state, loading: true };
//     case "products/loaded":
//       return { ...state, loading: false, products: action.payload };
//     case "products/failed":
//       return { ...state, loading: false, error: action.payload };
//     case "products/item":
//       return { ...state, loading: false, item: action.payload };
// case "products/search":
//   return {
//     ...state,
//     loading: false,
//     products: state.products.filter((product) =>
//       product.title.toLowerCase().includes(action.payload.toLowerCase())
//     ),
//   };

//     default:
//       return state;
//   }
// }

// export function searchProduc(key) {
//   return { type: "products/search", payload: key };
// }
