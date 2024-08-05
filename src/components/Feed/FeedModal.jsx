import React from "react";
import { ModalWrapper } from "./FeedModalStyles";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Loading from "../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";
import Error from "../Helpers/Error";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <ModalWrapper onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </ModalWrapper>
  );
};

export default FeedModal;
