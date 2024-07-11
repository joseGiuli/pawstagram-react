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
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helpers/Image";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);

  return (
    <PhotoContentWrapper single={single}>
      <ImageContainer single={single}>
        <Image src={photo.src} alt={photo.title} />
      </ImageContainer>

      <ImageDetails>
        <Author>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}

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
