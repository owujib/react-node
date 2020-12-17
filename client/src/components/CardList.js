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
    <div className="card">
      <img className="img-fluid" src={'http://localhost:4000' + productImg} />
      <h5 className="card-header">
        <Link to={'/product/' + _id} className="text-secondary">
          {name}
        </Link>
      </h5>
      <hr />
      <div className="card-body">
        <div>sizes: {sizeData}</div>
        <hr />
        <div>
          color:
          {color.map((element, id) => {
            return (
              <strong key={id} className="m-1">
                {element}
              </strong>
            );
          })}
          <hr />
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardList;
