import Link from "next/link";
import s from "./style.module.scss";

const Menu = () => {
  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
  ];

  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        {menuItems.map(({ href, title }) => (
          <li key={href}>
            <Link href={href} className={s.item}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
