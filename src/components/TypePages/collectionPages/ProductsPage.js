import ComponentRenderer from "@/components/ComponentRenderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

const ProductsPage = ({ collection }) => {
  if (!collection.data || (!collection.data.items && !collection.data.item)) {
    notFound(); // Redirect to 404 page
  }

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

return (
    <div>
        {collection.data.layoutList.before.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
        ))}
            {collection.data.items ? 
                <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collection.data.items.map((item) => (
                    <div key={item.item._id} className="card w-full bg-base-100 shadow-xl">
                        <figure className="h-72 overflow-hidden object-cover object-center">
                            <Image
                                className="h-72 overflow-hidden object-cover object-center"
                                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${item.item.img[0].path}`}
                                alt={item.item.img[0].altText}
                                width={item.item.img[0].width}
                                height={item.item.img[0].height}
                            />
                        </figure>
                        <div className="card-body">
                            <Link href={item.route}>
                                <h2 className="card-title">{item.item.title}</h2>
                            </Link>
                            <p>Rp. {formatPrice(item.item.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
             : (
                <section className="py-8 bg-base-100 md:py-16 dark:bg-gray-900 antialiased">
                    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                <Image
                                    className="h-auto overflow-hidden object-cover object-center rounded-lg"
                                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${collection.data.item.img[0].path}`}
                                    alt={collection.data.item.img[0].altText}
                                    width={collection.data.item.img[0].width}
                                    height={collection.data.item.img[0].height}
                                />
                            </div>

                            <div className="mt-6 sm:mt-8 lg:mt-0">
                                <h1 className="text-xl font-semibold sm:text-2xl">
                                    {collection.data.item.title}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p className="text-2xl font-extrabold sm:text-3xl">
                                        Rp. {formatPrice(collection.data.item.price)}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-sm font-medium leading-none">
                                            (5.0)
                                        </p>
                                        <a
                                            href="#"
                                            className="text-sm font-medium leading-none underline hover:no-underline"
                                        >
                                            345 Reviews
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                    <a
                                        href="#"
                                        title=""
                                        className="btn btn-primary flex justify-center items-center"
                                        role="button"
                                    >
                                        <svg
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
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                            />
                                        </svg>
                                        Add to favorites
                                    </a>

                                    <a
                                        href="#"
                                        title=""
                                        className="btn btn-primary flex justify-center items-center mt-4 sm:mt-0"
                                        role="button"
                                    >
                                        <svg
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
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                            />
                                        </svg>

                                        Add to cart
                                    </a>
                                </div>

                                <div className="divider" />

                                <div
                                    id="post"
                                    className="prose md:prose-md lg:prose-lg"
                                    dangerouslySetInnerHTML={{ __html: collection.data.item.description }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        {collection.data.layoutList.after.map((section) => (
            <ComponentRenderer key={section.id} component={section} />
        ))}
    </div>
);
};

export default ProductsPage;
