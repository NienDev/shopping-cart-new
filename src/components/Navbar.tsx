import React from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Cart from "./Cart";
import { useState, useContext } from "react";

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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    setOpen(value);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h5">Logo</Typography>
          <Box
            component="ul"
            sx={{ display: "flex", gap: "0.5em", flexGrow: 1 }}
          >
            <Button
              variant="outlined"
              sx={{ color: "white", "&:hover": { borderColor: "white" } }}
            >
              Home
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "white", "&:hover": { borderColor: "white" } }}
            >
              About
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "white", "&:hover": { borderColor: "white" } }}
            >
              Store
            </Button>
          </Box>
          <IconButton onClick={() => handleOpen(true)}>
            <AddShoppingCart sx={{ color: "white" }} />
          </IconButton>
          <Cart open={open} handleOpen={handleOpen} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
