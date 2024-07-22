import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SlideState {
  currentSlide: number;
  totalSlides: number;
  slides: string[]; // Array to store parsed slide data
}

const initialState: SlideState = {
  currentSlide: 0,
  totalSlides: 0,
  slides: [], // Initialize with an empty array
};

const slideSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlide = (state.currentSlide + 1) % state.totalSlides;
    },
    prevSlide: (state) => {
      state.currentSlide = (state.currentSlide - 1 + state.totalSlides) % state.totalSlides;
    },
    setSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload;
    },
    setSlides: (state, action: PayloadAction<string[]>) => {
      state.slides = action.payload;
      state.totalSlides = action.payload.length;
    },
  },
});

export const { nextSlide, prevSlide, setSlide, setSlides } = slideSlice.actions;
export default slideSlice.reducer;
