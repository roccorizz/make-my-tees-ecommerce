// components/StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        }
        if (halfStar) {
            stars.push(<span key="half" className="text-yellow-500">&#9734;</span>);
        }
        return stars;
    };

    return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
