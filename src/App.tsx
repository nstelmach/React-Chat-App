import { Container, Typography } from "@mui/material";
// import "./main.css"; // only import if you want to use tailwindcss

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">React Chat App</Typography>
    </Container>
  );
}

export default App;
