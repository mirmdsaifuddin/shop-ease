import PageNavigation from "../Components/PageNavigation";

function AboutPage(){
    return (
      <div style={styles.container}>
        <PageNavigation/>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.text}>
          At <strong>ShopEase</strong>, we're passionate about providing high-quality products with a seamless shopping experience. 
          Founded in 2023, we aim to make technology and lifestyle products more accessible to everyone.
        </p>
        <p style={styles.text}>
          Whether you're a tech enthusiast or a casual shopper, our platform brings together curated selections with unmatched convenience. 
          Join thousands of happy customers who trust us for their everyday needs.
        </p>
        <p style={styles.signature}>— The ShopEase Team</p>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "sans-serif",
      lineHeight: "1.6",
      color: "#333",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#1976d2",
      textAlign: "center",
    },
    text: {
      fontSize: "16px",
      marginBottom: "15px",
    },
    signature: {
      fontStyle: "italic",
      color: "#555",
      marginTop: "30px",
      textAlign: "right",
    },
  };

export default AboutPage
