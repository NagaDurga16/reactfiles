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

export default function Calculator() {
  const label = [
    [7, , 8, 9, "*"],
    [4, 5, 6, "+"],
    [1, 2, 3, "-"],
    [0, "/", ".", "="],
  ];
  const [result, setResult] = useState("");
  const handlerEvent = (event) => {
    const input = event.target.innerHTML;
    let newresult = result;
    if (input === "=") {
      newresult = eval(newresult);
    } else {
      newresult += input;
    }
    setResult(newresult);
  };
  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} size="small" aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>{result}</TableCell>
              <TableCell>CE</TableCell>
            </TableRow>
            {label.map((InputLabel) => (
              <TableRow>
                {InputLabel.map((Input) => (
                  <TableCell align="center" onClick={handlerEvent}>
                    {Input}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
