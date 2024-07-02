import React from "react";
import { ListItem, VisualizacaoSVG } from "./FeedPhotosItemStyles";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <ListItem onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>
        <VisualizacaoSVG />

        {photo.acessos}
      </span>
    </ListItem>
  );
};

export default FeedPhotosItem;
