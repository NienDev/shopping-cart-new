import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
interface IncDecBtn {
  quantity: number;
  id: number;
}

const IncDecBtn = ({ id, quantity }: IncDecBtn) => {
  const { increase, decrease } = useContext(CartContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton
        sx={{
          boxShadow: "1px 1px 2px 0 rgba(0,0,0,0.5)",
        }}
        onClick={() => {
          decrease(id);
        }}
      >
        <Remove />
      </IconButton>
      <Typography
        variant="body2"
        sx={{
          p: ".2em",
          px: ".4em",
          borderRadius: "4px",
          boxShadow: "1px 1px 2px 0 rgba(0,0,0,0.5)",
        }}
      >
        {quantity}
      </Typography>
      <IconButton
        sx={{
          boxShadow: "1px 1px 2px 0 rgba(0,0,0,0.5)",
        }}
        onClick={() => {
          increase(id);
        }}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default IncDecBtn;
