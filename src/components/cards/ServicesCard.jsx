import Image from "next/image";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div className="grid mx-auto container grid-cols-1 mt-12 lg:grid-cols-3 gap-6">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src={img} width={430} height={100} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between items-center">
            <h6 className="text-primary text-lg font-bold">price: ${price}</h6>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
