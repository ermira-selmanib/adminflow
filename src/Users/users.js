import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "First name",
    width: 70,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 70,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 70,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 70,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 70,
  },
  {
    field: "email",
    headerName: "Email",
    width: 70,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 70,
  },
];

export default function Users() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setRows(response.data);
    });
  }, []);

  //   const autosizeOptions = {
  //     DEFAULT_GRID_AUTOSIZE_OPTIONS.includeHeaders,
  //     String(DEFAULT_GRID_AUTOSIZE_OPTIONS.outliersFactor),
  //     DEFAULT_GRID_AUTOSIZE_OPTIONS.expand,
  //   };

  return rows.length > 0 ? (
    <div style={{ overflow: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        responsive={true}
      />
    </div>
  ) : (
    <h2>Ska te dhena!</h2>
  );
}
