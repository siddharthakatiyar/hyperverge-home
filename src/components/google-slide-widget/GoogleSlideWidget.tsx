import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSlides, setSlide } from '../../slideSlice';
import GoogleSlideNavigator from './GoogleSlideNavigator';

const GoogleSlideWidget: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSlide, slides } = useSelector((state: RootState) => state.slide);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        // Simulate fetching slide info (replace this with actual logic if available)
        const slideUrls = [
          'slide_1_url', // Replace these with actual slide URLs or IDs
          'slide_2_url',
          'slide_3_url',
          // ...
        ];
        dispatch(setSlides(slideUrls));
        dispatch(setSlide(0)); // Set the initial slide to 0
      } catch (error) {
        console.error('Error fetching slide information:', error);
      }
    };

    fetchSlides();
  }, [dispatch]);

  return (
    <div className="widget bg-white p-6 rounded shadow-lg flex flex-col items-center w-full relative">
      <div className="relative w-full pb-[56.25%] h-0">
        {slides.length > 0 && (
          <iframe
            src={`https://docs.google.com/presentation/d/e/2PACX-1vQU4mbq8ozRVWJkRog9npoqI66_aRhoPi1k76RLUltKXU4VOceYlEALvh9voImutg/embed?start=true&loop=true&delayms=3000&rm=minimal#slide=${slides[currentSlide]}`}
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            title="Google Slide"
          ></iframe>
        )}
        <GoogleSlideNavigator />
      </div>
    </div>
  );
};

export default GoogleSlideWidget;
