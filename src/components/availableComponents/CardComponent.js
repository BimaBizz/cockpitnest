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
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure className="h-72 overflow-hidden object-cover object-center">
                <Image
                    className="w-full h-full object-cover object-center"
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${data.image.path}`}
                    alt={data.image.altText}
                    width={data.image.width}
                    height={data.image.height}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.subTitle}</p>
                <div className={`card-actions ${getPositionClass(data.button.positionButton)}`}>
                    <Link href={data.button.link} className="btn btn-primary">{data.button.caption}</Link>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;