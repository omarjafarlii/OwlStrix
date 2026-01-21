import React from "react";
import CardServices from "../../../Components/CardServices";
import {servicesCard} from "../../Home/components/ServicesSection/ServicesSection"

const ServicesCardSection = () => {
  return (
    <div className="my-10">
      <section>
        <div className="py-20">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-[30px]">
              {servicesCard.map((item, index) => (
                <div
                  key={item.id}
                  className={`
                ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"} 
                flex h-full
              `}
                >
                  <CardServices item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCardSection;
