import PageNavigation from "../Components/PageNavigation";

function HomePage() {
  return (
    <div style={styles.container}>
      <PageNavigation />
      <h1 style={styles.heading}>Welcome to ShopEase</h1>
      <p style={styles.text}>
        Discover top-quality gadgets, electronics, and lifestyle products at
        unbeatable prices. Start shopping today!
      </p>
      <img
        src="https://dummyimage.com/1200x400/1976d2/ffffff&text=Shop+the+Latest+Collection"
        alt="Shopping banner"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#1976d2",
  },
  text: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "30px",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default HomePage;
