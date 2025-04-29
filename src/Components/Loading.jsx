function Loading() {
  return <div style={styles.loading}>Loading please wait....</div>;
}
const styles = {
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
export default Loading;
