import React from 'react';

const SubscriptionLinkComponent = ({ link }) => {
  return (
    <div>
      <p>Share this link to get subscribers:</p>
      <a href={link}>{link}</a>
    </div>
  );
}

export default SubscriptionLinkComponent;
