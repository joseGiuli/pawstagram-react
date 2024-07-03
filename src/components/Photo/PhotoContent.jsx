import React from "react";
import {
  Acessos,
  Atributos,
  Author,
  ImageContainer,
  ImageDetails,
  Item,
  PhotoContentWrapper,
  Titulo,
} from "./PhotoStyles";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import Title from "../../ui/typography/Title";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <PhotoContentWrapper>
      <ImageContainer>
        <img src={photo.src} alt={photo.title} />
      </ImageContainer>

      <ImageDetails>
        <Author>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <Acessos>{photo.acessos}</Acessos>
        </Author>
        <Titulo>
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </Titulo>
        <Atributos>
          <Item>{photo.peso}kg</Item>
          <Item>{photo.peso}anos</Item>
        </Atributos>
        <PhotoComments id={photo.id} comments={comments} />
      </ImageDetails>
    </PhotoContentWrapper>
  );
};

export default PhotoContent;
