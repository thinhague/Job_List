import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    height: 120px;
    width: 100%;
    max-width: 1100px;
    background-color: hsl(180, 31%, 95%);
    border-radius: 6px;
    margin: 40px auto;
    padding: 20px;
    box-shadow: 3px 6px 10px -1px rgba(0,0,0,0.63);

    section {
        display: flex;
        width: 50%;
        height: 100%;
    }
`;


export const ContainerLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    margin-right: 15px;

    img {
        width: 100%;
        max-width: 110px;
    }
`;

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;

    div {
        display: flex;
        width: 100%;

        ul {
            display: flex;
            width: 100%;
            padding: 0;
            margin: 0;

            & :first-child {
                list-style: none;
            }

            li {
                margin-right: 40px;
                color:  hsl(180, 8%, 52%);
                font-size: 14px;
                font-weight: 500;
            }
        }
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: 15px 0;
    }
`;

export const Featured = styled.label`
    background-color: hsl(180, 14%, 20%);
    font-size: 10px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    padding: 5px 8px;
    border-radius: 15px;
    margin: 0 3px;
`;

export const New = styled.label`
    background-color: hsl(180, 29%, 50%);
    font-size: 10px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    padding: 5px 8px;
    margin: 0 3px;
    border-radius: 15px;
`;

export const Company = styled.label`
    font-size: 16px;
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    margin-right: 10px;
`;

export const TitleJob = styled.label`
    color: black;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color:hsl(180, 29%, 50%);
    }
`;

export const ContainerLanguages = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    gap: 10px;

    input {
        outline: none;
        padding: 7px;
        cursor: pointer;
        border-radius: 5px;
        background-color:hsl(180, 31%, 85%) ;
        color:hsl(180, 29%, 50%);
        font-size: 13px;
        font-weight: 700;
        border: 0;

    &:hover {
        background-color: hsl(180, 29%, 50%);
        color: #fff;
    }
    }
`;
