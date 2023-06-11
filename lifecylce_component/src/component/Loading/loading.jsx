import React from 'react';
import '../css/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner-border" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Loading;
