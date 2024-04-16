import React from "react";

const subTotal = 5000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const Cart = () => {
  return (
    <div className="text-white">
      <main></main>
      <aside>
        <p>Subtotal: ₹ {subTotal}</p>
        <p>Shipping Charges: ₹ {shippingCharges}</p>
        <p>Tax: ₹ {tax}</p>
        <p>Total: ₹ {total}</p>
      </aside>
    </div>
  );
};

export default Cart;
