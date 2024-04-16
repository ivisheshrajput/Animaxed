import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

const subTotal = 5000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;

const discount = 400;
const total = subTotal + tax + shippingCharges - discount;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [couponCode]);

  return (
    <div className="text-white">
      <main></main>
      <aside>
        <p>Subtotal: ₹ {subTotal}</p>
        <p>Shipping Charges: ₹ {shippingCharges}</p>
        <p>Tax: ₹ {tax}</p>

        <p>
          Discount: <em> - ₹{discount} </em>
        </p>
        <p className="font-PoppinsSemiBold  ">
          <b>Total: ₹ {total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
          className="text-black rounded-md px-1"
        />
        {couponCode &&
          (isValidCouponCode ? (
            <div className="text-green-600 flex items-center space-x-1">
              <span>₹{discount} off using the </span> <code> {couponCode}</code>
            </div>
          ) : (
            <div className="text-red-600 flex items-center space-x-2">
              <div>Invalid Coupon</div>
              <div>
                {" "}
                <VscError />
              </div>{" "}
            </div>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
