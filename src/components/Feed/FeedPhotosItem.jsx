import React from "react";
import { ListItem, VisualizacaoSVG } from "./FeedPhotosItemStyles";
import Image from "../Helpers/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <ListItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />

      <span>
        <VisualizacaoSVG />

        {photo.acessos}
      </span>
    </ListItem>
  );
};

export default FeedPhotosItem;
