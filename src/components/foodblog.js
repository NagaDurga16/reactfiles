import { Box, Grid, Card, Collapse } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { WrapText } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";

export default class Foodblog extends React.Component {
  constructor() {
    super();
    this.state = {
      food: [
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
        {
          image:
            "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",

          name: "TellAboutThisSteak",
          price: "500",
        },
      ],
    };
  }
  render() {
    return (
      <Grid>
        <h1>My Food</h1>
        <Box>
          <Stack
            style={{ margin: 60 }}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            useFlexGap
            flexWrap="wrap"
          >
            {this.state.food.map(({ image, name, price }) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={image}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
        <Stack style={{ marginLeft: 500, marginRight: 500 }} spacing={2}>
          <Pagination count={10} shape="rounded" />
        </Stack>
        <h2>About Me, The Food Women </h2>
        <Card
          sx={{ minWidthWidth: 1000 }}
          style={{ marginLeft: 200, marginRight: 200 }}
        >
          <CardMedia
            sx={{ height: 340 }}
            image="https://thumbs.dreamstime.com/b/chef-cooking-harmony-woman-food-big-pot-89485044.jpg"
            title="green iguana"
          />
          <Typography variant="body2" color="text.secondary">
            Giada Pamela De Laurentiis is an Italian American chef,
            entrepreneur, writer, and television personality. She was the host
            of Food Network's program called Giada at Home. She also appears
            regularly as a contributor and guest co-host on NBC's program
            entitled Today
          </Typography>
        </Card>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    );
  }
}
