import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import "./Review.css";
import image from "../../images/OnlineReview.png";
import ReviewCard from "./ReviewCards";
import styled from 'styled-components';
import {
  ReviewContainer,
  ReviewWrapper,
  Heading,
  StyledCarouselProvider,
  Column1,
  ImgWrapper,
  Img,
  StyledSlide,
  StyledSlider,
  SliderWrapper,
} from "./ReviewSectionElements";
 const  Column2 = styled.div.attrs({divclassName:'nuvin'})`
 &nuvin.slick-arrow.slick-prev{
    background: green;
    width: 40px;
    height: 40px;
    display:flex;
    align-Item: center;
    justify-content: center;
    z-index:999;
    border-radius: 5px;
 }

 & .nuvin .slick-arrow.slick-next{
    background: green;
    width: 40px;
    height: 40px;
    display:flex;
    align-Item: center;
    justify-content: center;
    z-index:1;
    border-radius: 5px;
}
& .nuvin.slick-next::before{
    display:none;
}
& .nuvin.slick-prev::before{
    display:none;
}
&.nuvin{
    color:#5FA5F9;
}

 display:flex;
    margin: 0 15px;
    // padding: 0 15px;
    flex: 50%;
    height: 120%;
    justify-content: center;
    align-items: center;
    width:50%;
    @media screen and (max-width: 870px){
        width:100%;
        margin: 0 15px;

     }
    
`


const ReviewSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ReviewContainer id="Review">
      <Heading>Customer Reviews</Heading>
      <ReviewWrapper>
        <Column1>
          <ImgWrapper>
            <Img src={image} />
          </ImgWrapper>
        </Column1>
        <Column2 >
          {/* <StyledCarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={300}
            totalSlides={4}
            visibleSlides={2}
            interval={3000}
            isPlaying={true}
          > */}
          {/* <StyledSlider>
              <StyledSlide index={0}>
                <ReviewCard />
              </StyledSlide>
              <StyledSlide index={1}>
                <ReviewCard />
              </StyledSlide>
              <StyledSlide index={2}>
                <ReviewCard />
              </StyledSlide>
              <StyledSlide index={3}>
                <ReviewCard />
              </StyledSlide>
            </StyledSlider>
          </StyledCarouselProvider> */}
          <SliderWrapper>
            <Slider>
              <ReviewCard index={1} />
              <ReviewCard index={2} />
              <ReviewCard index={3} />
              <ReviewCard index={4} />
            </Slider>
          </SliderWrapper>
        </Column2 >
      </ReviewWrapper>
    </ReviewContainer>
  );
};

export default ReviewSection;
