function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        PUMA ANALYTICS
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          color: "#94a3b8",
        }}
      >
        Real-Time Product Intelligence
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Explore Dashboard
      </button>
    </div>
  );
}

export default App;