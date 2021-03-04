import styled from "styled-components";

export const BannerHeader = styled.header`
  /* background-image: url("https://images.ctfassets.net/j0hmm71qn9y2/3AzyT7Cv2cDZk67HHr8zCe/6bf8f160f7ddcd98d8bfdc547a82a839/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg"); */
  background-position: center top;
  background-size: cover;
  position: relative;
  height: 28rem;
  color: white;
  background-repeat: no-repeat;
  object-fit: contain;
`;

export const BannerContent = styled.div`
  height: 190px;
  padding-top: 140px;
  margin-left: 30px;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
`;

export const BannerButtons = styled.div``;

export const BannerBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.3s;
  }
`;

export const BannerDesc = styled.h2`
  width: 45rem;
  line-height: 1.3;
  font-size: 0.9rem;
  max-width: 360px;
  height: 80px;
  padding-top: 1rem;
`;
export const BannerFade = styled.div`
  height: 7.4rem;
  display: flex;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
