import {StyledSlider, SliderLeftButton, SliderLeftArrow, SliderRightButton, SliderRightArrow, SliderBar, SliderHandle} from '../styledComponents/styled.slider.jsx';

const Slider = () => {

  return (
    <StyledSlider>
      <SliderLeftButton>
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