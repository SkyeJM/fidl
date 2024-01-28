import React, { useEffect, useState } from 'react';
import { fetchSubscribers, removeSubscriber as removeSubscriberAPI } from '../services/api';
import SubscriberList from '../components/SubscriberList';

const SubscriberManagement = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const loadSubscribers = async () => {
      try {
        const response = await fetchSubscribers();
        setSubscribers(response.data);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }
    };

    loadSubscribers();
  }, []);

  // Function to remove a subscriber
  const removeSubscriber = async (subscriberId) => {
    try {
      await removeSubscriberAPI(subscriberId);
      setSubscribers(currentSubscribers => currentSubscribers.filter(sub => sub.id !== subscriberId));
    } catch (error) {
      console.error('Error removing subscriber:', error);
    }
  };

  return (
    <div className="main-content">
      <h1>Subscriber Management</h1>
      <SubscriberList subscribers={subscribers} onRemove={removeSubscriber} />
      {/* Add more management features as needed */}
    </div>
  );
}

export default SubscriberManagement;
