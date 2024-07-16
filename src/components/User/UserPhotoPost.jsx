import React from "react";
import { ImagePreview, SectionStyled } from "./UserPhotoPostStyles";
import Input from "../Forms/Input/Input";
import useFetch from "../../Hooks/useFetch";
import Button from "../Forms/Button/Button";
import { ButtonStyled } from "../Forms/Button/ButtonStyles";
import useForm from "../../Hooks/useForm";
import { PHOTO_POST } from "../../Api";
import { useNavigate } from "react-router-dom";
import { FormStyled } from "../../styles/GlobalStyles";
import Error from "../Helpers/Error";
import Head from "../Helpers/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <SectionStyled>
      <Head title="Postar" />
      <FormStyled onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input type="file" id="img" name="img" onChange={handleImgChange} />
        {loading ? (
          <ButtonStyled disabled>Enviando...</ButtonStyled>
        ) : (
          <ButtonStyled>Enviar</ButtonStyled>
        )}
        <Error error={error} />
      </FormStyled>

      <div>
        {img.preview && (
          <ImagePreview style={{ backgroundImage: `url('${img.preview}')` }} />
        )}
      </div>
      {/* <div>{img.preview && }</div> */}
    </SectionStyled>
  );
};

export default UserPhotoPost;
