"use client";

import React from 'react';
import Cookies from 'js-cookie';
import { decodeJwt } from 'jose';
import Image from 'next/image';
import { formatPrice } from '@/lib/formatPrice';

const DrawerCart = () => {
  let itemCart = [];
  const token = Cookies.get("session");
  if (token) {
    const payload = decodeJwt(token);
    itemCart = payload._meta?.itemCart || [];
  }

  return (
    <>
    <label htmlFor="drawer-cart" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" ><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                </label>
    <div className="drawer drawer-end z-50">
      <input id="drawer-cart" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="drawer-cart" className="drawer-overlay"></label>
        <div className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {itemCart.length > 0 ? (
            itemCart.map((item, index) => (
              <div key={index} className="cart-item mb-4 items-center flex space-x-4">
                <Image src={process.env.NEXT_PUBLIC_ASSETS_URL+item.image.path} alt={item.image.altText} width={item.image.width} height={item.image.width} className="w-16 h-16 object-cover" />
                <div className='text-left'>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">Rp. {formatPrice(item.price)}</p>
                </div>
              </div>
            ))
          ) : (
            <div>Your cart is empty.</div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default DrawerCart;