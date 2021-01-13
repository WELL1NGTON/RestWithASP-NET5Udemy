import './styles.css';

import { FiEdit, FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import logoImage from '../../assets/logo.svg';

export default function Books() {
  const [books, setBooks] = useState([]);

  const userName = localStorage.getItem('userName');

  const accessToken = localStorage.getItem('accessToken');

  const history = useHistory();

  useEffect(() => {
    api
      .get('api/Book/v1/asc/5/1', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setBooks(response.data.list));
  }, [accessToken]);

  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="Erudio" />
        <span>
          Welcome, <strong>{userName.toLowerCase()}</strong>!
        </span>
        <Link className="button" to="books/new">
          Add New Book
        </Link>
        <button type="button">
          <FiPower size={18} color="#251fC5" />
        </button>
      </header>
      <h1>Registered Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong>
            <p>{book.title}</p>
            <strong>Author:</strong>
            <p>{book.author}</p>
            <strong>Price:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(book.price)}
            </p>
            <strong>Release Date:</strong>
            <p>
              {Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}
            </p>

            <button type="button">
              <FiEdit size={20} color="#251fc5" />
            </button>
            <button type="button">
              <FiTrash2 size={20} color="#251fc5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
