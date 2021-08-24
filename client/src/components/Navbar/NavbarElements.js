import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav?'white' : 'transparent')} ;
    // background: transparent;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    left:0;
    right:0;
    z-index:10;
    border-bottom:${({scrollNav})=>(scrollNav?'2px solid #141645' : '')};
    border-top: 8px solid #141645;

    @media screen and (max-width:960px){
        transition: 0.8s all case;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height:80px;
    z-index: 1;
    width: 100%;
    padding: 0;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self: flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 4px;
    font-weight: bold;
    text-decoration: none;
    

`;
export const Img = styled.img`
     height: auto;
    max-width: 169px;
    justify-self: flex-start;
    // border: 2px solid #5FA5F9;
    // border-radius: 12px 6px ;
    // padding: 5px;
    // background: #F1F3F6;
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 870px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: green;

    }
     
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right: -22x;
    @media screen and (max-width: 870px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #141645;
    display:flex;
    align-items:center;
    text-decoration: none;
    font-size: 20px;
    padding 0 1rem;
    height: 100%;
    cursor: pointer;
     &.active {
         border-bottom: 8px solid #141645;
         color: #5FA5F9;
     }
     &:hover{
        color: #5FA5F9;
        transition: 0.2s ease-in-out;
     }
`;

export const NavBtn = styled.nav`
     display: flex;
     align-items: center;
     margin-right:6px;
     @media screen and (max-width: 870px){
         display: none;
     }
`;
export const NavBtnLink = styled(LinkR)`
     border-radius: 50px;
     border: solid 4px #141645;
     background: #fff;
     white-space: nowrap;
     padding: 10px 22px;
     color: #010606;
     font-size: 16px;
     outline: none;
     //border: none;
     cursor: pointer;
     transition: all 0.2s ease-in-out;
     text-decoration: none;

     &:hover {
         transition: all 0.2s ease-in-out;
         background: #5FA5F9;
         color:#010606;
         color: #fff;
     }
`;

export const NavLinksR = styled(LinkR)`
    color: #141645;
    display:flex;
    align-items:center;
    text-decoration: none;
    font-size: 20px;
    padding 0 1rem;
    height: 100%;
    cursor: pointer;
     &.active {
         border-bottom: 8px solid #141645;
         color: #5FA5F9;
     }
     &:hover{
        color: #5FA5F9;
        transition: 0.2s ease-in-out;
     }
`;