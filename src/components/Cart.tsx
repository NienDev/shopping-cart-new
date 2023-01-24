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
import React, { useContext, useState } from "react";
import "./blurBg.css";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
interface CartProps {
  open: boolean;
  handleOpen: (value: boolean) => void;
}

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

const Cart = ({ open, handleOpen }: CartProps) => {
  const { items } = useContext(CartContext);
  return (
    <>
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          zIndex: 1,
          boxShadow: "1px 1px 2px 0 rgba(0,0,0,0.5)",
          backgroundColor: "rgba(255,255,255, 0.7)",
          color: "red",
          backdropFilter: "blur(2px)",
          transition: "all 350ms ease-in-out",
        }}
        style={{ right: `${open ? "440px" : "-50px"}` }}
        onClick={() => handleOpen(false)}
      >
        <Close />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          top: -80,
          width: "400px",
          maxHeight: "600px",
          p: 2,
          mt: 12,
          backgroundColor: "white",
          borderRadius: "8px",
          overflowY: "auto",

          transition: "all 350ms ease-in-out",
        }}
        style={{ right: `${open ? "0px" : "-400px"}` }}
      >
        {items.map((item) => (
          <CartItem
            key={item.info.id}
            info={item.info}
            quantity={item.quantity}
          />
        ))}
      </Box>
    </>
  );
};

export default Cart;
