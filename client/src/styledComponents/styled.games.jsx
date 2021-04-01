export const GamesContainer = styled.div`
  height: 132px;
  overflow: hidden;
  padding-bottom: 20px;
  display: block;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 18px;
    position: relative;
    overflow: visible;
  }

  ::-webkit-scrollbar-button:horizontal:start:decrement {
    display: block;
    position: absolute;
    width: 38px;
    height: 7px;
    background-color: rgba( 0, 0, 0, 0.4 );
    border-radius: 3px;
    cursor: pointer;
    /* background-image: url(https://store.akamai.steamstatic.com/public/images/v6/icon_cluster_controls.png);
    background-position: -18px 2px;
    background-repeat: no-repeat; */
  }

  ::-webkit-scrollbar-button:horizontal:end:increment {
    display: block;
    position: absolute;
    width: 38px;
    height: 7px;
    background-color: rgba( 0, 0, 0, 0.4 );
    border-radius: 3px;
    cursor: pointer;
    /* background-image: url(https://store.akamai.steamstatic.com/public/images/v6/icon_cluster_controls.png);
    background-position: 20px 2px;
    background-repeat: no-repeat; */
  }

  ::-webkit-scrollbar-thumb {
    display: block;
    position: absolute;
    left: 0px;
    background-color: rgba( 0, 0, 0, 0.5 );
    top: 0;
    border-radius: 3px;
    height: 10px;
    width: 60px;
    cursor: pointer;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track-piece {
    width: 538px;
    height: 18px;
    display: block;
    position: absolute;
    left: 39px;
    right: 39px;
    top: 0;
    bottom: 0;
    background-color: rgba( 0, 0, 0, 0.2 );
    }
`;

export const GamesScroll = styled.div`
  white-space: nowrap;
  width: auto;
  display: block;
`;