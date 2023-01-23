import React from "react";
import { Link } from "wouter";
import './Gif.css';

export default function Gif({ title, id, url }) {
  return (
    <picture>
      <Link to={`/gif/${id}`} className='gif-container'>
        <img loading="lazy" className='gif' src={url} alt={title} />
      </Link>
    </picture>
  )
}