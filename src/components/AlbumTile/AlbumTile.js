import React from "react";
import "./AlbumTile.css";

const AlbumTile = props => (
  <div className="albumTile" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default AlbumTile;