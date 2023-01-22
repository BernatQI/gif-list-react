import React from "react";
import '../css/Gif.css';

export default function Gif({ title, id, url }) {
  return (
    <a href={`${id}`} className='gif-container'>
      <h3>{title}</h3>
      <small>{id}</small>
      <img className='gif' src={url} alt={title} />
    </a>
  );
}