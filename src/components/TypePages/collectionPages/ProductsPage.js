import ComponentRenderer from "@/components/ComponentRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageClient from "./ImageClient";
import Image from "next/image";

const ProductsPage = ({ collection }) => {
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
            <ComponentRenderer key={section.id} component={section} />
          ))}

          {/* Daftar items */}
          <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {collection.data.items.map((item) => (
              <Link
                href={item.route}
                key={item.item._id}
                className="card w-full bg-base-200 shadow-xl shadow-base-300 group"
              >
                <figure className="h-72 overflow-hidden object-cover object-center">
                  <Image
                    className="h-72 overflow-hidden object-cover object-center group-hover:scale-105 transition-transform"
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${item.item.img[0].path}`}
                    alt={item.item.img[0].altText}
                    width={item.item.img[0].width}
                    height={item.item.img[0].height}
                  />
                </figure>
                <div className="p-5 prose md:prose-base flex flex-col justify-between h-40">
                  <h4>{item.item.title}</h4>
                  <p className="text-end font-medium">Rp. {formatPrice(item.item.price)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Layout setelah */}
          {collection.data.layoutList.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}
        </>
      ) : (
        <>
          {/* Layout sebelum */}
          {collection.data.layoutDetail.before.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}
          <section className="py-8 bg-base-100 md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
              <div className="grid lg:grid-cols-2 gap-8 xl:gap-16">
                <ImageClient
                  mainImage={collection.data.item.img[0]}
                  additionalImages={collection.data.item.img}
                />
                {/* Bagian Detail */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {collection.data.item.title}
                  </h1>
                  <div className="flex items-center mt-4 space-x-4">
                    <p className="text-xl md:text-2xl font-medium">
                      Rp. {formatPrice(collection.data.item.price)}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 4.21l1.45 2.94 3.25.47-2.35 2.3.56 3.24-2.91-1.53-2.91 1.53.56-3.24-2.35-2.3 3.25-.47L12 4.21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm font-medium">(5.0)</p>
                      <a
                        href="#"
                        className="text-sm text-primary underline hover:no-underline"
                      >
                        345 Reviews
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Color</h3>
                    <div className="flex items-center space-x-2">
                      {["Green", "Pink", "Silver", "Blue"].map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-offset-2"
                          style={{
                            backgroundColor:
                              color.toLowerCase() === "pink"
                                ? "#FFC0CB"
                                : color.toLowerCase(),
                          }}
                          aria-label={color}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Storage</h3>
                    <div className="flex items-center space-x-2">
                      {["256GB", "512GB", "1TB"].map((size) => (
                        <button
                          key={size}
                          className="btn btn-outline btn-sm px-4"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center space-x-4">
                    <button className="btn btn-primary flex items-center space-x-2">
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
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                    <button className="btn btn-primary flex items-center space-x-2">
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
                      <span>Add to cart</span>
                    </button>
                  </div>
                  <div className="divider" />
                  <div
                    id="post"
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: collection.data.item.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Layout setelah */}
          {collection.data.layoutDetail.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
