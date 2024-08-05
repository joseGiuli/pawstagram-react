import React from "react";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../Api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import { ListWrapper } from "./FeedPhotosStyles";
import { Container } from "../../styles/GlobalStyles";
import Paragraph from "../../ui/typography/Paragraph";

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data === null) return <Paragraph>Nenhuma publicação ainda</Paragraph>;
  if (data.length === 0) return <Paragraph>Nenhuma publicação ainda</Paragraph>;
  if (data)
    return (
      <ListWrapper>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ListWrapper>
    );
  else return null;
};

export default FeedPhotos;
