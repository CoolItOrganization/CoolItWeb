import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg, HeroContent,HeroP,HeroH1,Img,HotLine} from './Heroelements';
import Image from "../../images/image2.png";


const HeroSection = () => {
    return (
        <HeroContainer>
          {/* //  nuvin */}
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <Img src={Image}/>
                <HeroH1>
                LAST LONGER & ATTRACTIVE
                </HeroH1>
                <HeroP>
                Best AC Maintenance, Repair, Service and Installation
                 Service in Colombo. We provide our best services for our clients 
                 and try to achieve our client's trust and satisfaction
                </HeroP>
                <HotLine>Hot Line<br/>+94765505633</HotLine>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
