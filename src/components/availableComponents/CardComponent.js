import Link from "next/link";
import Image from "next/image";

const CardComponent = ({ data, remove }) => {
    if (remove) return null;

    const getPositionClass = (position) => {
        switch (position) {
            case 'Left':
                return 'justify-start';
            case 'Center':
                return 'justify-center';
            case 'Right':
                return 'justify-end';
            default:
                return 'justify-end';
        }
    };

    return (
        <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
            <figure className="h-72 overflow-hidden object-cover object-center">
                <Image
                    className="w-full h-full object-cover object-center"
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${data.image.path}`}
                    alt={data.image.altText}
                    width={data.image.width}
                    height={data.image.height}
                />
            </figure>
            <div className="p-5 prose md:prose-base flex flex-col h-56">
                <h4>{data.title}</h4>
                <p className="font-medium">{data.subTitle}</p>
                <div className={`card-actions h-full items-end ${getPositionClass(data.button.positionButton)}`}>
                    <Link href={data.button.link} className="btn btn-primary">{data.button.caption}</Link>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;