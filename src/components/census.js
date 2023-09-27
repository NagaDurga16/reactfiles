import React from "react";
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

export default class Census extends React.Component {
  constructor() {
    super();
    this.state = { pname: "", dob: "", id: "", list: [] };
  }
  handlerSubmit = () => {
    const { pname, dob, id, list } = this.state;
    const newList = list;
    newList.push({
      pname,
      dob,
      id,
    });
    this.setState({ list: newList });
  };
  render() {
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
              onChange={(event) => this.setState({ pname: event.target.value })}
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">DOB</InputLabel>
            <Input
              id="component-simple"
              onChange={(event) => this.setState({ dob: event.target.value })}
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">ID</InputLabel>
            <Input
              id="component-simple"
              onChange={(event) => this.setState({ id: event.target.value })}
            />
          </FormControl>
          <Button variant="contained" onClick={this.handlerSubmit}>
            Submit
          </Button>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell align="right">DOB</TableCell>
                  <TableCell align="right">ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.list.map(({ pname, dob, id }) => (
                  <TableRow>
                    <TableCell align="center">{pname}</TableCell>
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
}
