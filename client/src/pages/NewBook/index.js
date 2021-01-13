import './styles.css';

import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import logoImage from '../../assets/logo.svg';

export default function NewBook() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [price, setPrice] = useState('');
  const { bookId } = useParams();

  const history = useHistory();

  async function createNewBook(e) {
    e.preventDefault();

    const data = {
      title,
      author,
      launchDate,
      price,
    };

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      await api.post('api/Book/v1', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      history.push('/books');
    } catch (err) {}
  }

  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logoImage} alt="Erudio" />
          <h1>Add New Book</h1>
          <p>enter the book information and click on 'Add'! ##### {bookId}</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5" />
            Home
          </Link>
        </section>
        <form onSubmit={createNewBook}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="date"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
          />
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
