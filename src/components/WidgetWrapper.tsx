import React from 'react';

interface WidgetWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {React.Children.map(children, child => (
        <div className="transform hover:scale-105 transition-transform duration-300">
          {child}
        </div>
      ))}
    </div>
  );
};

export default WidgetWrapper;
