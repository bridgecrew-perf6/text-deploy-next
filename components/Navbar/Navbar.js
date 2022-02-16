import React from 'react'
import Link from 'next/link'

import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link href={"/"}>
                <a>Accueil</a>
            </Link>
            <Link href={"/listes"}>
                <a>Listes</a>
            </Link>
            <Link href={"/isr"}>
                <a>Contact</a>
            </Link>
            <Link href={"/cours"}>
                <a>BTC</a>
            </Link>
            <Link href={"/add"}>
                <a>Ajouter</a>
            </Link>
        </nav>
    )
}
