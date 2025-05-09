import ComponentRenderer from "@/components/ComponentRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonBuyItem from "@/components/SupportComponents/ButtonBuyItem";

const ProductsPage = ({ collection, lang }) => {
  if (!collection.data || (!collection.data.items && !collection.data.item)) {
    notFound(); // Redirect to 404 page
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div>
      {collection.data.items ? (
        <>
          {/* Layout sebelum */}
          {collection.data.layoutList.before.map((section) => (
            <ComponentRenderer key={section.id} component={section} lang={lang}/>
          ))}

          {/* Daftar items */}
          <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {collection.data.items.map((item) => {
              const originalPrice = item.item.price;
              const discount = item.item.discount;
              const discountedPrice = discount.enableDiscount ? originalPrice * (1 - discount.percent / 100) : originalPrice;

              return (
                <Link
                  href={`/${lang}${item.route}`}
                  key={item.item._id}
                  className="card w-full bg-base-200 shadow-xl shadow-base-300 group"
                >
                  <figure className="h-72 overflow-hidden object-cover object-center">
                    {discount.enableDiscount && (
                      <div className='absolute z-10 top-2 right-2 p-2 h-14 w-14 rounded-full bg-[#2F602F] text-white text-sm flex justify-center items-center'>
                        <p>- {item.item.discount.percent}%</p>
                      </div>
                    )}
                    <Image
                      className="h-72 overflow-hidden object-cover object-center group-hover:scale-110 scale-100 transition-transform duration-500"
                      src={`${process.env.NEXT_ASSETS_URL}${item.item.image.path}`}
                      alt={item.item.image.altText}
                      width={item.item.image.width}
                      height={item.item.image.height}
                    />
                  </figure>
                  <div className="p-5 prose md:prose-base flex flex-col justify-between h-32">
                    <h4>{item.item.title}</h4>
                    <p className="text-end font-medium">
                      {discount.enableDiscount && (
                        <span className="line-through text-error mr-2">Rp. {formatPrice(originalPrice)}</span>
                      )}
                      <span>Rp. {formatPrice(discountedPrice)}</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Layout setelah */}
          {collection.data.layoutList.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} lang={lang}/>
          ))}
        </>
      ) : (
        <>
          {/* Layout sebelum */}
          {collection.data.layoutDetail.before.map((section) => (
            <ComponentRenderer key={section.id} component={section} lang={lang}/>
          ))}
          <section className="py-8 bg-base-100 md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-(--breakpoint-xl) px-4 mx-auto 2xl:px-0">
              <div className="grid lg:grid-cols-2 gap-8 xl:gap-16">
                <Image
                  className="rounded-xl shadow-lg object-cover object-center w-full h-[300px] lg:h-[400px]"
                  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${collection.data.item.image.path}`}
                  alt={collection.data.item.image.altText}
                  width={collection.data.item.image.width}
                  height={collection.data.item.image.height}
                />
                {/* Bagian Detail */}
                        <div>
                          <h1 className="text-2xl md:text-3xl font-bold">
                          {collection.data.item.title}
                          </h1>
                          <div className="flex items-center mt-4 space-x-4">
                          <p className="text-xl md:text-2xl font-medium">
                            {collection.data.item.discount.enableDiscount && (
                            <span className="line-through text-error mr-2">Rp. {formatPrice(collection.data.item.price)}</span>
                            )}
                            <span>
                            Rp. {formatPrice(collection.data.item.discount.enableDiscount ? collection.data.item.price * (1 - collection.data.item.discount.percent / 100) : collection.data.item.price)}
                            </span>
                          </p>
                          </div>
                          <div className="mt-6 flex items-center space-x-4">
                          <ButtonBuyItem itemId={collection.data.item._id} qt="1" lang={lang}/>
                          </div>
                          <div className="divider" />
                          <div
                          id="post"
                          className="prose"
                          dangerouslySetInnerHTML={{
                            __html: collection.data.item.desc
                          }}
                          />
                        </div>
                        </div>
                      </div>
                      </section>
                      {/* Layout setelah */}
          {collection.data.layoutDetail.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} lang={lang}/>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
