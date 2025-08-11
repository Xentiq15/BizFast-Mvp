import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-green-600 mt-4 font-semibold">{price} SEK</p>
    </div>
  );
};

export default ServiceCard;