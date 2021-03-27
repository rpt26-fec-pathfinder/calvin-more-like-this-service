export const StyledGames = styled.span`
  float: none;
  display: inline-block;
  vertical-align: top;
  background-color: rgba( 0, 0, 0, 0.2 );
  padding: 15px;
  height: 100px;
  margin-right: 2px;
  border: 1px solid rgba( 0, 0, 0, 0 );
  position: relative;
  /* white-space: nowrap; */
`;

export const GameImage = styled.img`
  width: 171px;
  height: 64px;
  -webkit-user-drag: none;
  border: none;
`;

export const GameTitle = styled.div`
  font-size: 13px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  color: #8f98a0;
  width: 171px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0px;
  display: block;
  /* margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
`;

export const GamePrice = styled.div`
  color: #acdbf5;
  display: inline;
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  font-size: 11px;
  line-height: 15px;
  position: relative;
`;