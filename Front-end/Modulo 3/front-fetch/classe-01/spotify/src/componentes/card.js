import React from "react";

function getArtistsNames(artists) {
    const artistsNames = artists.map((artist) => artist.name);
    return artistsNames.join(", ");
  }

  function getAlbumCover(album) {
    return album.images[2].url;
  }

function Card({ track }) {
  const { name, album, external_urls, artists } = track;

  return (
    <div className="card">
      <a href={external_urls.spotify}>
        <img src={getAlbumCover(album)} alt={`${name} album cover`} />
      </a>
      <b>{name}</b>- {getArtistsNames(artists)}
    </div>
  );
}

export default Card;