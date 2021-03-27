import {StyledSlider, SliderLeftButton, SliderLeftArrow, SliderRightButton, SliderRightArrow, SliderBar, SliderHandle} from '../styledComponents/styled.slider.jsx';

const Slider = ({games, ref, scrollClick}) => {

  return (
    <StyledSlider>
      <SliderLeftButton onClick={e => { scrollClick(e); }}>
        <SliderLeftArrow/>
      </SliderLeftButton>
      <SliderRightButton>
        <SliderRightArrow/>
      </SliderRightButton>
      <SliderBar>
        <SliderHandle/>
      </SliderBar>
    </StyledSlider>
  );
};

export default Slider;