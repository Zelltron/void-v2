import React from 'react';

const TV = ({imgSrc}) => {
  return (
    <div className="tv-container reveal">
      <img alt="tv-box" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
      <img alt="dog" className="mainscreen tv-contents" src={process.env.PUBLIC_URL + imgSrc}/>
    </div>
  );
};

export default TV;
