import React from "react";
import GifsList from '../../components/GifsList/index';
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {

  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <div>
      {
        loading
          ? <Spinner />
          : <GifsList gifs={gifs} />
      }
    </div>
  )
}