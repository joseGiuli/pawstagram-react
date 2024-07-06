import React from "react";
import {
  CommentsButton,
  CommentsForm,
  EnviarSVG,
  TextArea,
} from "./PhotoCommentsStyles";

import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import { COMMENT_POST } from "../../Api";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <>
      <CommentsForm onSubmit={handleSubmit}>
        <TextArea
          id="comment"
          name="comment"
          placeholder="Digite aqui..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <CommentsButton>
          <EnviarSVG />
        </CommentsButton>
        <Error error={error} />
      </CommentsForm>
    </>
  );
};

export default PhotoCommentsForm;
