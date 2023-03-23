import { COLORS } from "@/utils/variables";
import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 9rem;
`;

export const NavbarLogoContainer = styled.div`
    display: flex;
    align-items: center;

`;

export const NavbarList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 1rem;

`;

export const NavbarListItem = styled.li`
`;

export const NavbarLink = styled(Link)`

    text-decoration: none;
    color: ${COLORS.TEXT};
    font-size: 2.4rem;
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid transparent;
    &:hover {
        font-size: 2.6rem;
        border-color: ${COLORS.TEXT};
    }
`;