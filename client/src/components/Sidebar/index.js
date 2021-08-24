import React from "react";
import { SidebarContainer, Icon, CloseIcon,SideBtnWrap,SidebarLink,SidebarRoute,SidebarMenu,SidebarWrapper } from "./SidebarElements";
import { animateScroll as scroll } from "react-scroll";

const Sidebar = ({isOpen,toggle}) => {

  const toggleHome = () => {
    toggle();
    scroll.scrollToTop({ duration: 500 });
  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle} >
       <Icon >
          <CloseIcon onClick={toggle}/>
        </Icon>
        <SidebarWrapper>
        
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggleHome}>Home</SidebarLink>
            
            <SidebarLink to="About" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="Service" onClick={toggle}>Services</SidebarLink>
            <SidebarLink to="Review" onClick={toggle}>Reviews</SidebarLink>
            <SidebarLink to="SignUp" onClick={toggle}>Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
