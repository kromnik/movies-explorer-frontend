import React from "react";

import { moviesCards } from "../../utils/dataMovies";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";

function SavedMoviesCardList() {
  return (
    <>
      <section className="movies-card-list__elements || 
        movies-card-list__elements movies-card-list__elements_type_save">
        {moviesCards.slice(0, 3).map((card) => (
          <SavedMoviesCard key={card.id} {...card} />
        ))}
      </section>
      <button 
        className="movies-card-list__else-btn || 
          movies-card-list__else-btn movies-card-list__else-btn_type_save " 
        type="button">
      </button>
    </>
  );
}

export default SavedMoviesCardList;
