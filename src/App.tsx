import { CssBaseline, Grid } from "@mui/material";
import { useState } from "react";
import CustomCard from "./components/CustomCard";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import { CartProvider } from "./context/CartContext";

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

function App() {
  const [items, setItems] = useState<CartItemProps[]>([]);

  console.log(items);
  return (
    <div>
      <CartProvider>
        <CssBaseline />
        <Navbar />
        <Grid
          container
          gap={4}
          className="grid-container"
          sx={{
            gridTemplateColumns: "repeat(auto-fill, 100px)",
            justifyContent: { xs: "center", md: "space-between" },
          }}
          paddingX={2}
        >
          {data.map((item) => (
            <Grid item key={item.id}>
              <CustomCard item={item} />
            </Grid>
          ))}
        </Grid>
      </CartProvider>
    </div>
  );
}

export default App;

// reminder
// use useContext for increase and decrease the quantity of each item in cart
