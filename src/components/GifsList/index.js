import React from "react";
import Gif from '../Gif';

export default function GifsList({ gifs }) {

  return <section className="gifs-container">
    {
      gifs.map(({ title, id, url }) =>
        <Gif
          key={id}
          title={title}
          id={id}
          url={url} />)
    }
  </section>
}