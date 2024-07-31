import React from 'react';

const MainWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="container  flex-1  mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default MainWrapper;
