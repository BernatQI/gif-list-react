import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);

    const keywordDefault = keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({ keyword: keywordDefault })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      })
  }, [keyword, setGifs]);

  return { loading, gifs }
}