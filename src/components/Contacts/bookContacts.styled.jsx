import styled from "styled-components";

export const ContactsContainer = styled.div`
max-width: 1200px;
padding: 20px;
margin-left: auto;
margin-right: auto;
`;

export const IsLoading = styled.p`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export const ItemStyled = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 20px;
gap: 10px;
`;

export const ListStyled = styled.li`
display: flex;
justify-content: center;
border: 1px solid #660000;
border-radius: 10px;
padding: 10px 0 10px 0;

font-family: Oxygen, sans-serif;
font-size: 16px;
`;

export const StyledName = styled.span`
font-family: Oxygen, sans-serif;
font-size: 16px;
margin-right: 10px;
`;