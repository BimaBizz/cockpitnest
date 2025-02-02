"use client"

import React from "react";
import { updateUserMeta } from "@/lib/account";
import Cookies from "js-cookie"; 
import { decodeJwt } from 'jose'

const AddToCartButton = ({ lang, item }) => {
  const handleAddToCart = async () => {
    const token = Cookies.get("session");
    if (!token) {
      window.location.href = `/${lang}/login`;
      return;
    }
    const payload = decodeJwt(token);
    const userId = payload._id; 
    let itemCart = payload._meta?.itemCart || [];
    itemCart = [...itemCart, item];
    const meta = { itemCart };
    const response = await updateUserMeta(userId, meta);
    if (response && response.JWT) {
        Cookies.set("session", response.JWT);
    }
  };

  return (
    <button
      className="btn btn-primary flex items-center space-x-2"
      onClick={handleAddToCart}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        />
      </svg>
      <span>{lang === "id" ? "Tambahkan ke Keranjang" : "Add to Cart"}</span>
    </button>
  );
};

export default AddToCartButton;
