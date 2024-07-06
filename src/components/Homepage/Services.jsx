import { services } from "@/lib/servics";
import ServicesCard from "../cards/ServicesCard";

const Services = () => {
  return (
    <div className="grid mx-auto container grid-cols-1 mt-12 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServicesCard service={service} key={service._id} />
      ))}
    </div>
  );
};

export default Services;
