import { BACKGROUND, COLORS } from "@/utils/variables";
import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    align-items: center;
    background-color: ${BACKGROUND.PRIMARY};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    height: 9rem;
    justify-content: space-between;
    padding: 1rem 1.2rem;
`;

export const NavbarLogoContainer = styled.div`
    align-items: center;
    display: flex;

`;

export const NavbarList = styled.ul`
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    list-style: none;

`;

export const NavbarListItem = styled.li`
`;

export const NavbarLink = styled(Link)`
    border-bottom: 2px solid transparent;
    color: ${COLORS.TEXT};
    font-size: 2.4rem;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        font-size: 2.6rem;
        border-color: ${COLORS.TEXT};
    }
`;