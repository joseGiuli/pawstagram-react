import React from "react";
import { PhotoWrapper } from "./PhotoStyles";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "./PhotoContent";
import { Container } from "../../styles/GlobalStyles";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <PhotoWrapper>
        <Container>
          <PhotoContent single={true} data={data} />
        </Container>
      </PhotoWrapper>
    );
  else return null;
};

export default Photo;
