import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">{content}</div>
      </div>
    </div>
  );
};

export default Card;
