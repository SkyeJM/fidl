import React from 'react';

const SubscriberList = ({ subscribers, onRemove }) => {
  return (
    <ul>
      {subscribers.map(subscriber => (
        <li key={subscriber.id}>
          {subscriber.name} - {subscriber.phone}
          <button onClick={() => onRemove(subscriber.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default SubscriberList;
