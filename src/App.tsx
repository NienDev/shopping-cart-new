import { CssBaseline, Grid } from "@mui/material";
import { useState } from "react";
import CustomCard from "./components/CustomCard";
import Navbar from "./components/Navbar";
import data from "./data/data.json";

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
  const handleClicked = (clickedItem: ItemProps) => {
    // if in cart does not contain this product with specific id
    const targetItemIndex = items.findIndex(
      (item) => item.info.id == clickedItem.id
    );
    // console.log(targetItemIndex);
    if (targetItemIndex != -1) {
      setItems((items) => {
        return items.map((item, i) =>
          i == targetItemIndex
            ? { info: item.info, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setItems((items) => {
        return [...items, { info: clickedItem, quantity: 1 }];
      });
    }
    const decrease = (id: number) => {
      setItems((items) => {
        let newItems: CartItemProps[] = [];
        items.forEach((item) => {
          if (item.info.id == id) {
            if (item.quantity - 1 > 0) {
              newItems.push({ info: item.info, quantity: item.quantity - 1 });
            }
          } else {
            newItems.push(item);
          }
        });
        return newItems;
      });
    };
    const increase = (id: number) => {
      setItems((items) =>
        items.map((item) =>
          item.info.id == id
            ? { info: item.info, quantity: item.quantity + 1 }
            : item
        )
      );
    };
  };

  console.log(items);
  return (
    <>
      <CssBaseline />
      <Navbar cartItems={items} />
      <Grid container gap={4}>
        {data.map((item) => (
          <Grid item key={item.id}>
            <CustomCard item={item} handleClicked={handleClicked} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;

// reminder
// use useContext for increase and decrease the quantity of each item in cart
