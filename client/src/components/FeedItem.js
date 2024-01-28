import React from 'react';

const FeedItem = ({ content, onDragStart, onDragOver, onDrop }) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {/* Render content based on its type (image or video) */}
    </div>
  );
}

export default FeedItem;
