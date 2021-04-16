export const HoverContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 1526:
  padding: 5px 12px 0 12px;
`;

export const HoverBox = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  background: linear-gradient(to bottom, rgba(227,234,239,1) 0%,rgba(199,213,224,1) 100%);
  width: 306px;
  color: #30455a;
  font-size: 12px;
  overflow: hidden;
  box-shadow: 0 0 12px #000000;
`;

export const HoverContent = styled.div`
  padding: 16px;
`;

export const HoverGame = styled.div`

`;

export const HoverTitle = styled.h4`
  color: #222d3d;
  /* font-weight: normal; */
  font-size: 15px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  text-transform: unset;
  letter-spacing: 0px;
  margin-top: -4px;
  line-height: 17px;
  margin-bottom: 4px;
`;

export const HoverReleaseDate = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
`;

export const HoverScreenshotsContainer = styled.div`
  position: relative;
  width: 274px;
  height: 153px;
  margin: 5px 0;
`;

export const HoverScreenshots = styled.div`
  animation-delay: 0s;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  /* opacity: 0; */
  transition: opacity 300ms;
  animation: screenshot_hover_fadein 4s linear;
  animation-iteration-count: infinite;
`;

export const HoverBody = styled.div`
  margin-bottom: 6px;
`;

export const HoverReviewSummary = styled.div`
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 4px;
  color: #c6d4df;
  background-color: rgba( 38, 54, 69, 0.6);
`;

export const HoverRecommendation = styled.span`
  color: #66C0F4;
`;

export const HoverClear = styled.div`
  clear: left;
`;

export const HoverTagRow = styled.div`
  overflow: hidden;
  height: 19px;
  margin-top: 2px;
`;

export const HoverTag = styled.div`
  background-color: #96a3ae;
  color: rgba(227,234,239,1);
  box-shadow: none;
  padding: 0 4px;
  font-size: 11px;
  border-radius: 2px;
  display: inline-block;
  line-height: 19px;
  margin-right: 2px;
  cursor: pointer;
  margin-bottom: 3px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;