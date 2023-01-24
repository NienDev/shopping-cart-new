import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Remove, Add, Close } from "@mui/icons-material";
import React, { useState } from "react";
import "./blurBg.css";
import IncDecBtn from "./IncDecBtn";

interface ItemProps {
  name: string;
  price: number;
  id: number;
  imgUrl: string;
}

interface CartItemProps {
  info: ItemProps;
  quantity: number;
}

const CartItem = ({ info, quantity }: CartItemProps) => {
  const { imgUrl, price, id, name } = info;
  return (
    <>
      <Card sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
          <CardMedia
            src={imgUrl}
            alt="image"
            component="img"
            sx={{
              objectFit: "cover",
              objectPosition: "center",
              height: "80px",
              width: "80px",
              borderRadius: "12px",
              boxShadow: "1px 1px 2px 0 rgba(0,0,0,0.5)",
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{name}</Typography>
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Typography variant="body2" sx={{ flexGrow: 1 }}>
                {price} * {quantity}
              </Typography>
              <Typography variant="body2">{price * quantity}</Typography>
            </Box>
          </CardContent>
        </Box>
        <CardActions>
          <IncDecBtn id={info.id} quantity={quantity} key={info.id} />
        </CardActions>
      </Card>
    </>
  );
};

export default CartItem;
