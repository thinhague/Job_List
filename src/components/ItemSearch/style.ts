import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        align-items: center;
        height: 30px;
        background-color:hsl(180, 29%, 50%);
        border-radius: 5px;

        button {
        padding: 0;
        width: 30px;
        height: 100%;
        background-color: transparent;
        border: 0;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        &:hover {
            background-color: hsl(180, 14%, 20%);
        }
    }

    label {
     padding: 0 10px;
     display: flex;
     height: 100%;
     align-items: center;
     background-color:hsl(180, 31%, 85%);
     color:hsl(180, 29%, 50%);
     font-size: 13px;
     font-weight: 700;
     border-top-left-radius: 5px;
     border-bottom-left-radius: 5px;
    }
`;