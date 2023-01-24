import { createContext, ReactNode, useState } from "react";
import React from "react";

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

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  items: CartItemProps[];
  handleClicked: (clickedItem: ItemProps) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  getTotal: () => number;
  getQuantity: (id: number) => number;
}

export const CartContext = createContext<CartContextProps>({
  items: [],
  handleClicked: () => {},
  increase: () => {},
  decrease: () => {},
  getTotal: () => {
    return 0;
  },
  getQuantity: () => {
    return 0;
  },
});

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItemProps[]>([]);

  const handleClicked = (clickedItem: ItemProps) => {
    // if in cart does not contain this product with specific id
    const targetItemIndex = items.findIndex(
      (item) => item.info.id == clickedItem.id
    );
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
  };

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

  const getQuantity = (id: number) => {
    if (items.length <= 0) return 0;
    let targetItemQuantity: number = items.filter(
      (item) => item.info.id == id
    )[0]?.quantity;
    return targetItemQuantity;
  };

  const getTotal = () => {
    return items.reduce((acc, { info: { price }, quantity }) => {
      return acc + price * quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        handleClicked,
        decrease,
        increase,
        getTotal,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
