import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
 

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index 999;
    width: 100%;
    overflow: scroll;
     height: 100%;
    background:#141645;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition:  all 0.3s ease-in-out; 
    opacity: ${({isOpen}) => (isOpen ?'100%':'0')};
    top: ${({isOpen}) => (isOpen ?'0':'-100%')};
    visibility:${({isOpen})=> (isOpen? 'visible': 'hidden')};
    //   top: 0;
`;

export const CloseIcon = styled(FaTimes)`
    color: #5FA5F9;
`;

export const Icon = styled.div`
    position: fixed;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
export const SidebarWrapper = styled.div`
    
    color:#fff;
`;
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #red;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
   
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #5FA5F9;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 20px;
    margin-bottom: 6px;
    outline: none;
    border: solid 4px white;
    cursor pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`;

