function SearchItem({ search, setSearch }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    marginBottom: "20px",
  },
  input: {
    width: "300px",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    outline: "none",
    transition: "all 0.3s ease",
  },
};

export default SearchItem;
