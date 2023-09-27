import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Censusfn() {
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [id, setId] = useState("");
  const [list, setlist] = useState([]);

  const handlerSubmit = () => {
    const details = { name, dob, id };
    setlist([...list, details]);
  };

  return (
    <Grid>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            id="component-simple"
            onChange={(event) => setname(event.target.value)}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">DOB</InputLabel>
          <Input
            id="component-simple"
            onChange={(event) => setdob(event.target.value)}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">ID</InputLabel>
          <Input
            id="component-simple"
            onChange={(event) => setId(event.target.value)}
          />
        </FormControl>
        <Button variant="contained" onClick={handlerSubmit}>
          Submit
        </Button>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="right">DOB</TableCell>
                <TableCell align="right">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(({ name, dob, id }, i) => (
                <TableRow key={id + i}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{dob}</TableCell>
                  <TableCell align="center">{id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
}
