import React, { useState, useEffect } from "react";
import Gif from './Gif';
import getGifs from "../services/getGifs";

export default function GifsList({ params }) {

  const { keyword } = params;
  const [gifs, setGifs] = useState(
    {
      loading: false,
      results: []
    }
  );

  useEffect(() => {
    setGifs(currentGifs => ({ loading: true, results: currentGifs.results }))

    getGifs({ keyword })
      .then(gifs => {
        setGifs({ loading: false, results: gifs });
      })
  }, [keyword])

  if (gifs.loading) return <i>Loading... 🌀</i>

  return <div>
    {
      gifs.results.map(({ title, id, url }) =>
        <Gif
          key={id}
          title={title}
          id={id}
          url={url} />)
    }
  </div>
}