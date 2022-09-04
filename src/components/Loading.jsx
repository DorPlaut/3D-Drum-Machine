import React from 'react';
import { RiseLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="loading">
      <RiseLoader color="#ffffff" size={40} />
      <br />
      <br />
      <h1>Loading Page...</h1>
    </div>
  );
}

export default Loading;
