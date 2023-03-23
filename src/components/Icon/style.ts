import { COLORS } from "@/utils/variables";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #c1c1c1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
        scale: 1.1;
    }
    &:active {
        scale: 0.9;
    }
`;