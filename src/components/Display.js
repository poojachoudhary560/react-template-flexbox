import React from 'react';

const Display = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="header">head</div>
      <div className="content">
        <div className="side">side</div>
        <div className="container">
          {data.map((item, index) => (
            <div className={`item ${index % 3 === 0 ? 'item-green' : ''}`}>
              Item {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Display;
