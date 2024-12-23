import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGlobalContext } from "./Context";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { search } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${search}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const imgUrl = item?.urls?.regular;
        return <img src={imgUrl} alt="img" key={item.id} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
