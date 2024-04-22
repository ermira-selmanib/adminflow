import { Grid } from "@mui/material";
export default function Footer() {
  return (
    <Grid
      container
      columns={12}
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Grid item xs={8}>
        Lorem ipsum txt
      </Grid>
      <Grid item xs={4}>
        Zhvilluar nga Ermira
      </Grid>
    </Grid>
  );
}
