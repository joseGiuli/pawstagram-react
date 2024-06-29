import React from "react";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTO_POST } from "../../Api";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
