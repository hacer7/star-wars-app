import Link from "next/link";
import s from "./style.module.scss";

const Menu = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        <li>
          <Link href="/" className={s.item}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
