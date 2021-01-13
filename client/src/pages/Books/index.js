import './styles.css';

import { FiEdit, FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import logoImage from '../../assets/logo.svg';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  const userName = localStorage.getItem('userName');

  const accessToken = localStorage.getItem('accessToken');

  const authorization = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const history = useHistory();

  async function logout() {
    try {
      await api.get(`api/Auth/v1/revoke`, authorization);

      localStorage.clear();
      history.push('/');
    } catch (err) {
      alert('Logout failed! Try again!');
    }
  }

  async function editBook(id) {
    try {
      history.push(`books/new/${id}`);
    } catch (err) {
      alert('Edit book failed! Try again!');
    }
  }

  async function deleteBook(id) {
    try {
      await api.delete(`api/Book/v1/${id}`, authorization);

      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      alert('Delete failed! Try again!');
    }
  }

  useEffect(() => {
    fetchMoreBooks();
  }, [accessToken]);

  async function fetchMoreBooks() {
    const response = await api.get(`api/Book/v1/asc/4/${page}`, authorization);
    setBooks([...books, ...response.data.list]);
    setPage(page + 1);
  }

  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="Erudio" />
        <span>
          Welcome, <strong>{userName.toLowerCase()}</strong>!
        </span>
        <Link className="button" to="books/new/0">
          Add New Book
        </Link>
        <button onClick={logout} type="button">
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
              <FiEdit
                size={20}
                onClick={() => editBook(book.id)}
                color="#251fc5"
              />
            </button>
            <button onClick={() => deleteBook(book.id)} type="button">
              <FiTrash2 size={20} color="#251fc5" />
            </button>
          </li>
        ))}
      </ul>
      <button className="button" onClick={fetchMoreBooks} type="button">
        Load More
      </button>
    </div>
  );
}
