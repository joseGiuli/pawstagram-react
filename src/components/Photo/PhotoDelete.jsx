import React from "react";
import { ButtonDelete } from "./PhotoDeleteStyles";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(e) {
    const confirm = window.confirm(
      "Você tem certeza que quer DELETAR esta imagem?"
    );
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <div>
      {loading ? (
        <ButtonDelete>Deletando</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleClick}>Deletar</ButtonDelete>
      )}
    </div>
  );
};

export default PhotoDelete;
