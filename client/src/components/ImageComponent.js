import React from 'react';

const ImageComponent = ({ imageUrl, altText }) => {
  return (
    <img src={imageUrl} alt={altText} width="320" height="240" />
  );
}

export default ImageComponent;
