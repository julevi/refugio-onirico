import React from 'react';
import Rating from 'react-rating-stars-component';

const CourseRating = ({ rating }) => {
  return (
    <div>
      <Rating
        count={5} // Número total de estrelas
        value={rating} // Valor da avaliação
        size={24} // Tamanho das estrelas
        edit={false} // Impede a edição das estrelas pelo usuário
        activeColor="#ffd700" // Cor das estrelas ativas (preenchidas)
        isHalf={true}
      />
    </div>
  );
};

export default CourseRating;
