import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'wouter';
import GifsList from "../../components/GifsList";
import { useGifs } from "../../hooks/useGifs";

export default function Home() {

  const POPULAR_GIFS = ['Dev', 'SEO', 'JavaScript'];

  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search your GIFS here..."
          onChange={handleChange}
          type='text'
          value={keyword} />
        <button>Search</button>
      </form>
      <h2>Last search</h2>
      <GifsList gifs={gifs} />
      <h3>GIFs suggestions</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li className="menu-li" key={popularGif}>
            <Link className="menu-link" to={`/search/${popularGif}`}>GIFs of {popularGif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}