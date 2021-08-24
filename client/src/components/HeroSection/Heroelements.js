import styled from 'styled-components';


export const HeroContainer = styled.div`
    background: #5FA5F9;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 0 30px;
    // width: 100%;
    z-index: 1;
    position: relative;
     top: 0px;
    // right:0px; 
    height: 730px;
    @media screen and (max-height: 550px){
         height:550px;
    }
    background:red;
    

    
`;
export const HeroBg =  styled.div`
    // position: absolute;
    top:0;
    right: 0;
    left:0;
    bottom:0;
    width: 100%;
    height: 100%;
     overflow: hidden;
    // @media screen and (max-height: 550px){
    //     height:550px;
    // }
`;
export const VideoBg = styled.video`
    width:  100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34; 
    
`;
export const HeroContent =styled.div`
    z-index: 3;
    max-width: 700px;
    position: absolute;
    display: flex;
    // margin: auto;
    flex-direction: column;
    align-items: center;
    padding: 8px 24px;
    // top:80px;
    // @media screen and (max-height: 550px){
    //     top:100px;
    // }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight:1500;
    font-family: 'georgia', serif;
    text-align: center;
    word-spacing: 8px;
    letter-spacing: 3px;
    text-shadow: 1px 1px 0 #000,
    1px 1px 0 #000,
    1px 1px 0 #000,
    1px 1px 0 #000;
    margin-top: 24px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 650px){
        font-size: 34px;
    }
    @media screen and (max-width: 450px){
        font-size: 20px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-weight:280;
    font-size: 24px;
    text-shadow: 1px 1px 0 #000,
    1px 1px 0 #000,
    1px 1px 0 #000,
    1px 1px 0 #000;

   font-family: 'times new roman', cursive;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
    @media screen and (max-width: 600px){
        font-size: 18px;
        padding: 0 20px;
    }
    
`;

export const Img = styled.img`
// padding-top:10px;
     height: auto;
    max-width: 169px;
    background: transparent;
`
export const HotLine = styled.h3`
margin-top: 10px;
     text-align:center;
     font-size: 40px;
    border: 4px solid #F5F5F5;
     border-radius: 15px;
     color: #F5F5F5;
     text-shadow: 3px 3px 0 #000,
    3px 3px 0 #000,
    3px 3px 0 #000,
    3px 3px 0 #000;
    padding: 2px;
    box-shadow:  0px 0px 15px 0px;
    @media screen and (max-width: 600px){
        font-size: 25px;
    }
`;