export default function Nav({ cartItems }) {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex justify-end align-end py-3">
      Your Cart: <span className="font-bold">{totalQuantity}</span>
    </nav>
  );
}
