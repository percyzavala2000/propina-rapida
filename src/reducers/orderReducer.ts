import { MenuList, OrderItem } from "../types/tipos";

export type OrderActions ={ type: "add-item"; payload: { item: MenuList } }| 
{ type: "remove-item"; payload: { id: MenuList["id"] } }| 
{ type: "place-order" }|
 { type: "add-propina"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  propina: number;
};

export const initialState: OrderState = {
  order: [],
  propina: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "add-item":
      const itemExist = state.order.find(
        (orderItem) => orderItem.id === action.payload.item.id
      );
      let updateOrder: OrderItem[] = [];
      if (itemExist) {
        updateOrder = state.order.map((orderItem) =>
          orderItem.id === action.payload.item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
       
      } else {
        const newItem: OrderItem = { ...action.payload.item, quantity: 1 };

        updateOrder = [...state.order, newItem];
      }
      return {
        ...state,
        order: updateOrder,
      };

    case "remove-item":
      const eliminaItem = state.order.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        order: eliminaItem,
      };
    case "place-order":
      return {

      ...state,
       order:[],
       propina:0
      };
    case "add-propina":
      const propina=action.payload.value;
      return {
      ...state,
      propina
      };

    default:
      return state;
    
  }
  
};
