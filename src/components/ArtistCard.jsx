import React from 'react';

const ArtistCard = ({ artist }) => (
  <div className="artist-card">
    <img src={artist.picture_medium} alt={artist.name} className="artist-image" />
    <h3 className="artist-name">{artist.name}</h3>
    {/* Other artist details */}
  </div>
);

export default ArtistCard;
