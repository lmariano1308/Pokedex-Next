import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NavbarContainer, NavbarLink, NavbarList, NavbarListItem, NavbarLogoContainer } from "./styles";


const Navbar = () => {
  return (
        <NavbarContainer>
            <NavbarLogoContainer>
                <Link href="/">
                <Image src="/images/nextdex.png" width="150" height="45" alt="Nextdex Logo"/>
                </Link>
            </NavbarLogoContainer>
            <NavbarList>
                <NavbarListItem>
                    <NavbarLink href="/">
                        Home
                    </NavbarLink>
                </NavbarListItem>
                <NavbarListItem>
                    <NavbarLink href="/about">
                        Sobre
                    </NavbarLink>
                </NavbarListItem>
            </NavbarList>
        </NavbarContainer>
    )
};

export default Navbar;
