import React, { FC, useState } from "react";
import s from "./style.module.scss";
import Image from "next/image";
import { IPerson } from "@/api/peopleApi/peopleApi.types";
import ViewPersonModal from "@/components/Modals/ViewPersonModal";

interface Props {
  person: IPerson;
}

const Item: FC<Props> = ({ person }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      />
    </>
  );
};

export default Item;
