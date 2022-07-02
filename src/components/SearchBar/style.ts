import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    top: -35px;
    margin: 0 auto;
`;

export const Bar = styled.section`
    display: flex;
    width: 90%;
    align-items: center;
    max-width: 1100px;
    height: 30px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 6px;
    background-color: hsl(180, 31%, 95%);
    box-shadow: 3px 6px 10px -1px rgba(0,0,0,0.63);
`;

export const ContainerLeft = styled.section`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 95%;
`;

export const ContainerRight = styled.section`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 5%;

    button {
        color:hsl(180, 29%, 50%);
        width: auto;
        border-radius: 0;
        border: 0;
        cursor: pointer;

        &:hover {
            background-color: transparent;
            text-decoration: underline;
            text-decoration-color:hsl(180, 29%, 50%);
        }
    }
`;