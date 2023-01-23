import React from "react";
import {
  Stack,
  Button,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface CustomCardProps {
  item: ItemProps;
  handleClicked: (item: ItemProps) => void;
}

interface ItemProps {
  name: string;
  price: number;
  id: number;
  imgUrl: string;
}

const CustomCard = ({ item, handleClicked }: CustomCardProps) => {
  const { imgUrl, price, name, id } = item;
  return (
    <>
      <Card sx={{ width: "360px" }} elevation={4}>
        <CardMedia
          src={
            imgUrl
              ? imgUrl
              : "https://images.unsplash.com/photo-1674230226985-f7d78563c90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="image"
          component="img"
          sx={{ objectFit: "cover", objectPosition: "center", height: "200px" }}
        />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{name ? name : "Product Name"}</Typography>
            <Typography variant="body1" sx={{ color: "grey" }}>
              $ {price ? price : "0.0"}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{ width: "90%", mx: "auto" }}
            onClick={() => handleClicked(item)}
          >
            Add To Card
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CustomCard;
