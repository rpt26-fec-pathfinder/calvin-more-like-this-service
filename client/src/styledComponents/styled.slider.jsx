export const StyledSlider = styled.div`
  width: 616px;
  height: 18px;
  position: relative;
`;

export const SliderLeftButton = styled.div`
  display: block;
  position: absolute;
  width: 38px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba( 0, 0, 0, 0.4 );
  border-radius: 3px;
  cursor: pointer;
`;

export const SliderLeftArrow = styled.span`
  display: inline-block;
  background-position: -18px 0px;
  background-repeat: no-repeat;
  background-image: url(https://store.akamai.steamstatic.com/public/images/v6/icon_cluster_controls.png);
  width: 9px;
  height: 7px;
  margin-left: 13px;
  margin-top: 5px;
`;

export const SliderRightButton = styled.div`
  display: block;
  position: absolute;
  width: 38px;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba( 0, 0, 0, 0.4 );
  border-radius: 3px;
  cursor: pointer;
`;

export const SliderRightArrow = styled.span`
  display: inline-block;
  background-position: -9px 0px;
  background-repeat: no-repeat;
  background-image: url(https://store.akamai.steamstatic.com/public/images/v6/icon_cluster_controls.png);
  width: 9px;
  height: 7px;
  margin-left: 15px;
  margin-top: 5px;
`;

export const SliderBar = styled.div`
  width: 538px;
  height: 18px;
  display: block;
  position: absolute;
  left: 39px;
  right: 39px;
  top: 0;
  bottom: 0;
  background-color: rgba( 0, 0, 0, 0.2 );
  border-radius: 3px;
`;

export const SliderHandle = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  background-color: rgba( 0, 0, 0, 0.5 );
  top: 0;
  border-radius: 3px;
  height: 18px;
  width: 60px;
  cursor: pointer;
`;