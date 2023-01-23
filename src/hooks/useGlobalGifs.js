import { useContext } from 'react'
import GifsContextProvider from '../context/GifContext'

export default function useGlobalGifs() {
  return useContext(GifsContextProvider).gifs
}