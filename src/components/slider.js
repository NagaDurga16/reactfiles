import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { blue } from "@mui/material/colors";
import { Grid } from "@mui/material";
export default class Sliders extends React.Component {
  constructor() {
    super();
    this.state = { width: 300, height: 300 };
  }

  WidthSlider = (e, newWith) => {
    this.setState({ width: newWith });
  };
  heightSlider = (e, newHeight) => {
    this.setState({ height: newHeight });
  };

  render() {
    return (
      <Grid>
        <Box
          sx={{
            border: "1px solid black",
            width: this.state.width,
            height: this.state.height,
          }}
        >
          Hi, I would change my body size with slider
        </Box>
        <Box sx={{ width: 300, height: 300 }}>
          <Slider
            defaultValue={300}
            min={100}
            max={500}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={this.WidthSlider}
          />
          <Slider
            defaultValue={50}
            min={100}
            max={500}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={this.heightSlider}
          />
        </Box>
      </Grid>
    );
  }
}
