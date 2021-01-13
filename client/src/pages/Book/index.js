import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.svg';

export default function Book() {
  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="Erudio" />
        <span>
          Welcome, <strong>Leandro</strong>!
        </span>
        <Link className="button" to="book/new">
          Add New Book
        </Link>
        <button type="button">
          <FiPower size={18} color="#251fC5" />
        </button>
      </header>
      <h1>Registered Books</h1>
      <ul>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Pulton</p>
          <strong>Price:</strong>
          <p>R$ 47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251fc5" />
            <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Pulton</p>
          <strong>Price:</strong>
          <p>R$ 47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251fc5" />
            <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Pulton</p>
          <strong>Price:</strong>
          <p>R$ 47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251fc5" />
            <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Pulton</p>
          <strong>Price:</strong>
          <p>R$ 47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251fc5" />
            <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Pulton</p>
          <strong>Price:</strong>
          <p>R$ 47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251fc5" />
            <FiTrash2 size={20} color="#251fc5" />
          </button>
        </li>
      </ul>
    </div>
  );
}
