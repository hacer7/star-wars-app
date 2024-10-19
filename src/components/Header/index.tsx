import Image from "next/image";
import React from "react";
import s from "./style.module.scss";
import Link from "next/link";
import Menu from "../Menu";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Image
          src="/star_wars_logo.png"
          alt="Star Wars Logo"
          width={300}
          height={200}
        />
      </Link>
      <Menu/>
      <SearchBar/>
    </header>
  );
};

export default Header;
