import React, { FC } from "react";
import s from "./style.module.scss";
import Image from "next/image";
import { IPerson } from "@/api/peopleApi/peopleApi.types";

interface Props {
  person: IPerson;
}

const Item: FC<Props> = ({ person }) => {
  return (
    <div className={s.item}>
      <Image
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
        alt={person.name}
        width={400}
        height={500}
      />
      <span className={s.name}>{person.name}</span>
    </div>
  );
};

export default Item;
