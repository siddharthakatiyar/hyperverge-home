import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { nextSlide, prevSlide } from '../../slideSlice';

const GoogleSlideNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSlide, totalSlides } = useSelector((state: RootState) => state.slide);

  return (
    <div className="absolute inset-0 flex items-center justify-between">
      <button onClick={() => dispatch(prevSlide())} className="w-1/4 h-full bg-transparent"></button>
      <button onClick={() => dispatch(nextSlide())} className="w-1/4 h-full bg-transparent"></button>
      <div className="absolute bottom-4 right-4 flex space-x-1">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default GoogleSlideNavigator;
