"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/Components/NavBar.scss";

export const NavBar = () => {
  const router = useRouter();

  return (
    <header>
      <h1>Alejandra Rojas</h1>
      <nav>
        <ul>
          <Link href={""}>About</Link>
          <Link href={""}>Projects</Link>
          <Link href={""}>Contact</Link>
        </ul>
      </nav>
    </header>
  );
};
