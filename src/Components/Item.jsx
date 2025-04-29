import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../store/ProductsSlice";

function Item() {
  //const [item, setItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { item, error } = useSelector((store) => store.products);

  //   useEffect(() => {
  //     async function getItem() {
  //       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const data = await res.json();
  //       console.log(data);
  //       setItem(data);
  //     }
  //     getItem();
  //   }, [id]);
  useEffect(() => {
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  if (!item) return <Loading message={error} />;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={item.image} alt={item.title} style={styles.image} />
        <div style={styles.details}>
          <h2 style={styles.title}>{item.title}</h2>
          <p style={styles.description}>{item.description}</p>
          <p style={styles.category}>Category: {item.category}</p>
          <p style={styles.price}>$ {item.price}</p>
          <button style={styles.button}>Add to Cart</button>
        </div>
      </div>
      <button style={styles.button} onClick={() => navigate("/products")}>
        Back
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    maxWidth: "900px",
    width: "100%",
    gap: "30px",
  },
  image: {
    width: "300px",
    height: "350px",
    objectFit: "contain",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    padding: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  category: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  price: {
    fontSize: "22px",
    color: "#d32f2f",
    fontWeight: "600",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  loading: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1976d2",
  },
};

export default Item;
