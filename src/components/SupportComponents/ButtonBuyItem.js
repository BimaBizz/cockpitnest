"use client";

import React from "react";

const ButtonBuyItem = ({itemId, qt, lang}) => {

    const handleCreateCollection = async () => {
        const post = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/content/item/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "data": {
                        "itemId": [itemId],
                        "qt" : qt
                    }
                }
            ), 
            cache : 'no-cache'
        });
        const data = await post.json();
    }

  return (
    <button
      className="btn btn-primary flex items-center space-x-2"
      onClick={() => handleCreateCollection()}
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
      <span>{lang === "id" ? "Beli Sekarang" : "Buy Now"}</span>
    </button>
  );
};

export default ButtonBuyItem;
