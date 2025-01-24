
import React from 'react';
import Image from 'next/image';
import { formatPrice } from '../../lib/formatPrice';
import Link from 'next/link';

export async function ItemsPagesComponent({ data, remove, lang }) {
  if (remove) return null;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {data.items.map((item, index) => {
        const originalPrice = item.item.price;
        const discount = item.item.discount;
        const discountedPrice = discount.enableDiscount ? originalPrice * (1 - discount.percent / 100) : originalPrice;

        return (
          <div key={index} className="card w-full bg-base-100 shadow-xl group">
            <figure className='h-52 md:h-80 relative'>
            {discount.enableDiscount && (
                <div className='absolute z-10 top-2 right-2 p-2 h-14 w-14 rounded-full bg-[#2F602F] text-white text-sm flex justify-center items-center'><p>- {item.item.discount.percent}%</p></div>
                )}
              <Image src={process.env.NEXT_PUBLIC_ASSETS_URL+item.item.image.path} alt={item.item.image.altText} width={item.item.image.width} height={item.item.image.height} className='object-cover object-center h-full group-hover:scale-110 scale-100 transition-transform duration-500'/>
            </figure>
            <div className="p-4">
              <h2 className="text-xl font-semibold h-16">{item.item.title}</h2>
              <p className='mb-4'>
                {discount.enableDiscount && (
                  <span className="line-through text-error mr-2">Rp. {formatPrice(originalPrice)}</span>
                )}
                <span>Rp. {formatPrice(discountedPrice)}</span>
              </p>
              <div className="card-actions justify-end">
                <Link href={`/${lang}${item.route}`} className="btn btn-primary">{lang === "id" ? "Beli Sekarang" : "Buy Now" }</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsPagesComponent;