import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";

function Row(props) {
  const { title, fetchUrl, isLargeRow = false } = props;

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
              </>
            )
        )}
      </RowPosters>
    </RowContainer>
  );
}

const RowContainer = styled.div`
  color: white;
  margin-left: 20px;
`;

const RowPosters = styled.div`
  display: flex;
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    cursor: pointer;
  }

  .row__poster {
    max-height: 130px;
    object-fit: contain;
    margin-right: 10px;
    width: 100%;
    transition: transform 300ms;
    border-radius: 5px;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  .row__posterLarge {
    max-height: 250px;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

export default Row;
