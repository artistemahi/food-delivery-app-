// reading the value from the store
// subscribing to the store
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/slices/cartSlice";
import CartItemList from "../utils/CartItemList";

const Cart = () => {
  const cartItem = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();
  const handlerClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItem.length === 0){
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-2xl font-bold m-4">Cart</h1>
        <p  className="text-xl font-bold m-6" >🛒 Your cart is empty. Add some items!</p>
      </div>
    );}
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <button
          className="bg-red-600 text-amber-50 px-6 py-3 m-2 rounded-md"
          onClick={handlerClearCart}
        >
          ClearCart
        </button>
        <CartItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
