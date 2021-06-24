import { useState } from "react";
import './App.css';

import getSpotifyToken from "./utils/spotify-token";
import Card from "./componentes/card";



function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [tracks, setTracks] = useState ([]);
  const [erro, setErro] = useState();
  const [carregando, setCarregando] = useState (false);

  const baseURL = (pesquisa) =>
  `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!pesquisa) return;   

    setCarregando(true);

    try {
      const token = await getSpotifyToken();

      const resposta = await fetch(baseURL(pesquisa), {
        headers: {
          "Authorization": token
        }
      })
      const {tracks} = await resposta.json();

      setTracks(tracks.items);
      setErro();

    } catch(error) {
      setErro(error.message);
      setTracks([]);
    }
    setCarregando(false);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </form>
      {carregando && <span className="loading"> Carregando...</span>}
      {erro && <span className="error">{erro}</span>}
      {tracks.length === 0 && <span>Nada encontrado</span>}
      {tracks.map(track => {
        return (
        <Card track={track}/>
        )
      })}
    </div>
  );
}

export default App;
