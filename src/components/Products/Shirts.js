// Shirt.jsx
import React from 'react';

const Shirt = ({ shirt }) => {
    return (
        <div className="max-w-[250px] mb-8 mx-4">
            <img
                src={shirt.image}
                alt={`Shirt - ${shirt.title}`}
                className="w-full h-[250px] object-cover rounded-md "
            />
            <div className="text-center">
                <p className="text-[14px] md:text-[18px] lg:text-[18px] font-roboto ">
                    {shirt.title}
                </p>
            </div>
        </div>
    );
};

export default Shirt;
