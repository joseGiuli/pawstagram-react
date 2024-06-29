import React from "react";
import { ListItem, VisualizacaoSVG } from "./FeedPhotosItemStyles";

const FeedPhotosItem = ({ photo }) => {
  return (
    <ListItem>
      <img src={photo.src} alt={photo.title} />
      <span>
        <VisualizacaoSVG />

        {photo.acessos}
      </span>
    </ListItem>
  );
};

export default FeedPhotosItem;
