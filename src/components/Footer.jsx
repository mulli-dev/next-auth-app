import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2a3439", // Dark gray background
        color: "#fff", // White text
        padding: "40px 0", // Padding for spacing
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // Evenly space out the columns
          flexWrap: "wrap",
          gap: "40px", // Space between each section
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Staff Email Section */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "15px" }}>
            Staff Email
          </h4>
          <p style={{ margin: "0 0 10px" }}>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              Click Here to Access Staff Email
            </a>
          </p>
          <p style={{ margin: "0" }}>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              Click here to Access KALRO Sharepoint
            </a>
          </p>
        </div>

        {/* Contact Us Section */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "15px" }}>
            Contact Us
          </h4>
          <p style={{ marginBottom: "10px" }}>
            Contact our staff. Our staff are ready to help you. There is no
            better time than now.
          </p>
          <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
            Learn How &rarr;
          </a>
        </div>

        {/* Linkages Section */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "15px" }}>
            Linkages
          </h4>
          <p>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              CODATA Agricultural Task Group
            </a>
          </p>
          <p>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              Ministry of Agriculture, Livestock and Fisheries
            </a>
          </p>
          <p>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              Agriculture and Food Authority (AFA)
            </a>
          </p>
          <p>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              Agricultural Science and Technology Indicators
            </a>
          </p>
          <p>
            <a href="#" style={{ color: "#a1a1a1", textDecoration: "none" }}>
              more...
            </a>
          </p>
        </div>

        {/* Our Address Section */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "15px" }}>
            Our Address
          </h4>
          <p>
            Director General,
            <br />
            Kenya Agricultural and Livestock Research Organisation,
            <br />
            P.O.Box 57811, City Square, NAIROBI, 00200, Kenya
            <br />
            Kaptagat Rd, Loresho, Nairobi, Kenya
          </p>
          <p>Direct Line : +254 722206986</p>
          <p>Contact Centre : 0111010100</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          borderTop: "1px solid #555",
          paddingTop: "20px",
          color: "#a1a1a1",
        }}
      >
        <p>&copy; 2024 KALRO. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
