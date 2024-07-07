import React from "react";
import { Imagem, ImageWrapper, Skeleton } from "./ImageStyled";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <ImageWrapper>
      {skeleton && <Skeleton />}

      <Imagem onLoad={handleLoad} alt={alt} {...props} />
    </ImageWrapper>
  );
};

export default Image;
