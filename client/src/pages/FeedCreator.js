import React, { useState } from 'react';
import FeedItem from '../components/FeedItem';
import { createFeed } from '../services/api'; // Import the API service

const FeedCreator = () => {
  const [feedItems, setFeedItems] = useState([]);

  // Function to handle the feed creation
  const handleCreateFeed = async () => {
    try {
      const response = await createFeed({ items: feedItems });
      console.log('Feed created:', response.data);
      // Additional logic after feed creation
    } catch (error) {
      console.error('Error creating feed:', error);
    }
  };

  // Function to handle file uploads (for images/videos)
  const handleFileUpload = (event) => {
    // Process and add files to feedItems here...
  };

  // Drag-and-drop handlers
  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('item_id', item.id);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('item_id');
    // Logic to reorder feedItems based on the dragged item's ID
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-content">
      <h1>Feed Creator</h1>
      <div
        id="feedContainer"
        className="feed-container"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {feedItems.map(item => (
          <FeedItem
            key={item.id}
            content={item}
            onDragStart={(e) => handleDragStart(e, item)}
          />
        ))}
      </div>
      <button className="button" onClick={handleCreateFeed}>Create Feed</button>
      <input type="file" id="uploadContent" multiple onChange={handleFileUpload} />
    </div>
  );
}

export default FeedCreator;

