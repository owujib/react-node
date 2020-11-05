import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import Color from '../hoc/Color';
import '../App.css';

function Home() {
  return (
    <div>
      <Jumbotron>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          deleniti aspernatur incidunt sunt voluptate, id optio cupiditate,
          ratione quisquam tempore harum officiis, hic blanditiis maiores soluta
          maxime sint reiciendis. Inventore consectetur repellat aut voluptates,
          veritatis rem culpa, provident illum cupiditate commodi ad eligendi
          iure veniam porro dolores esse eaque sunt libero praesentium magni
          exercitationem! Iusto, autem. Dignissimos aut ducimus natus.
        </p>
        <Link to="#" className="btn btn-success">
          read more
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Color(Home);
