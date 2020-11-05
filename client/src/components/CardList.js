import React from 'react';
import { Link } from 'react-router-dom';

function CardList({
  _id,
  name,
  description,
  // createdAt,
  color,
  size,
  productImg,
}) {
  const sizeData = size.map((element, id) => {
    return (
      <strong key={id} className="m-1">
        {element}
      </strong>
    );
  });
  //   const colorData =
  return (
    <div className="card p-3">
      <h1>List</h1>
      <h4>
        <Link to={'/product/' + _id}>{name}</Link>
      </h4>
      <img className="img-fluid" src={'http://localhost:4000' + productImg} />
      <div>sizes: {sizeData}</div>
      <div>
        color:
        {color.map((element, id) => {
          return (
            <strong key={id} className="m-1">
              {element}
            </strong>
          );
        })}
      </div>

      <p>{description}</p>
      <hr />
    </div>
  );
}

export default CardList;
