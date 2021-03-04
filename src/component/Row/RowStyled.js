import styled from "styled-components";

export const RowContainer = styled.div`
  color: #fff;
  margin-left: 20px;
`;

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  /* hidden the scroll bar of x but stil has the function of scrolling */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RowImage = styled.img`
  max-height: 100px;
  object-fit: contain;
  margin-right: 10px;
  width: 100%;
  transition: transform 450ms;

  :hover {
    transform: scale(1.09);
    opacity: 1;
  }
`;
