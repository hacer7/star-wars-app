import React, { FC, useEffect, useState } from "react";
import s from "./style.module.scss";
import Image from "next/image";
import { IPerson } from "@/api/peopleApi/peopleApi.types";
import ViewPersonModal from "@/components/Modals/ViewPersonModal";
import { useLazyGetFilmByIdQuery } from "@/api/filmsApi";
import { IFilm } from "@/api/filmsApi/filmsApi.types";
import { IStarShip } from "@/api/starShipsApi/starShipsApi.types";
import { useLazyGetStarShipByIdQuery } from "@/api/starShipsApi";

interface Props {
  person: IPerson;
}

const Item: FC<Props> = ({ person }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [getFilmById] = useLazyGetFilmByIdQuery();
  const [films, setFilms] = useState<IFilm[]>([]);

  const [getStarShipById] = useLazyGetStarShipByIdQuery()
  const [starShips, setStarShips] = useState<IStarShip[]>();

  useEffect(() => {
    if (!isOpen) return;

    const fetchData = async () => {
      try {
        const filmPromises = person.films.map((filmId) => getFilmById(filmId).unwrap());
        const fetchedFilms = await Promise.all(filmPromises);
        setFilms(fetchedFilms);

        const starShipPromises = person.starships.map((starShipId) =>
          getStarShipById(starShipId).unwrap()
        );
        const fetchedStarShips = await Promise.all(starShipPromises);
        setStarShips(fetchedStarShips);
      } catch (error) {
        console.error("Failed to fetch films or starships:", error);
      }
    };

    fetchData();
  }, [person, isOpen]);

  return (
    <>
      <div className={s.item} onClick={() => setIsOpen(true)}>
        <Image
          src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
          alt={person.name}
          width={400}
          height={500}
        />
        <span className={s.name}>{person.name}</span>
      </div>
      <ViewPersonModal
        open={isOpen}
        handleClose={() => setIsOpen(false)}
        person={person}
        films={films}
        starShips={starShips}
      />
    </>
  );
};

export default Item;
