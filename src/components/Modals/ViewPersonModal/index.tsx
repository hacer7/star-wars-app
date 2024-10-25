import Modal from "@mui/material/Modal";
import { FC, useEffect, useState } from "react";
import s from "./style.module.scss";
import { IPerson } from "@/api/peopleApi/peopleApi.types";
import { ReactFlow } from "@xyflow/react";
import ImageNode from "@/components/ImageNode";
import "@xyflow/react/dist/style.css";
import { type Edge } from "@xyflow/react";
import { IFilm } from "@/api/filmsApi/filmsApi.types";
import { IStarShip } from "@/api/starShipsApi/starShipsApi.types";
import Loader from "@/components/Loader";

interface Props {
  open: boolean;
  handleClose: (value: boolean) => void;
  person: IPerson;
  starShips?: IStarShip[];
  films: IFilm[];
}

const ViewPersonModal: FC<Props> = ({
  open,
  handleClose,
  person,
  films,
  starShips,
}) => {
  const { id, name } = person;

  const [starShipsEdges, setStarShipsEdges] = useState<Edge[]>([]);
  useEffect(() => {
    if (!open) return;

    const newEdges: Edge[] = films.flatMap((film) =>
      film.starships
        .filter((starshipId) => person.starships.includes(starshipId))
        .map((starshipId) => ({
          id: `${film.title}-${starshipId}`,
          source: film.title,
          target: starshipId.toString(),
        }))
    );
  
    setStarShipsEdges(newEdges);
  }, [open, starShips]);

  const nodeTypes = {
    imageNode: ImageNode,
  };

  const nodes = [
    {
      id: name,
      type: "imageNode",
      data: {
        name,
        imageUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
        width: 250,
        height: 300,
      },
      position: { x: 50, y: 50 },
    },
    ...films.map((film, index) => ({
      id: film.title,
      type: "imageNode",
      data: {
        name: film.title,
        imageUrl: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
        width: 200,
        height: 250,
      },
      position: { x: 500, y: 50 + 300 * index },
    })),
    ...(starShips ?? []).map((starShip, index) => ({
      id: starShip.id?.toString(),
      type: "imageNode",
      data: {
        name: starShip.name,
        imageUrl: `https://starwars-visualguide.com/assets/img/starships/${starShip.id}.jpg`,
        width: 300,
        height: 200,
      },
      position: { x: 1000, y: 50 + 300 * index },
    })),
  ];

  const edges = [
    ...films.map((film) => ({
      id: `${name}-${film.title}`,
      source: name,
      target: film.title,
    })),
    ...starShipsEdges,
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      {open && (films.length === 0 || !starShips) ? (
        <Loader />
      ) : (
        <div className={s.wrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            className={s.reactFlow}
            colorMode="light"
            nodeTypes={nodeTypes}
          />
        </div>
      )}
    </Modal>
  );
};

export default ViewPersonModal;
