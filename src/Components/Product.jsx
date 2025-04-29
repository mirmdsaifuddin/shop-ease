import { Link, Outlet } from "react-router-dom";

function Product({ item }) {
  return (
    <Link to={`${item.id}`}>
      <div
        style={{
          width: "200px",
          textAlign: "center",
          margin: "10px",
          padding: "10px",
          border: "1px solid rgba(0,0,0,0.5)",

          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <h4 style={{ margin: "5px 0", fontSize: "16px" }}>{item.title}</h4>
        <p style={{ color: "red", fontWeight: "bold", marginTop: "5px" }}>
          {" "}
          $ : {item.price}
        </p>
        <p style={{ color: "#007185", fontWeight: "bold", marginTop: "5px" }}>
          {item.discountPercentage
            ? `Upto ${Math.floor(item.discountPercentage)}% Off`
            : "Best Deal"}
        </p>
      </div>
    </Link>
  );
}

export default Product;
