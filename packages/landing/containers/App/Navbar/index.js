import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/src/components/Navbar';
import Drawer from 'common/src/components/Drawer';
import Button from 'common/src/components/Button';
import Logo from 'common/src/components/UIElements/Logo';
import HamburgMenu from 'common/src/components/HamburgMenu';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import { Container } from './navbar.style';
import { openModal, closeModal } from '@redq/reuse-modal';
import SearchPanel from '../SearchPanel';
import LoginModal from '../LoginModal';

import LogoImage from 'common/src/assets/image/app/logo.png';

import { DrawerContext } from 'common/src/contexts/DrawerContext';

import data from 'common/src/data/App/MenuItems';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="#"
          logoSrc={LogoImage}
          title="Aloka"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Drawer
            width="360px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={data.menuItems}
              drawerClose={true}
              offset={-100}
            />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: ['100px', '180px'],
    paddingTop: ['8px', '12px'],
    paddingBottom: ['8px', '12px'],
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
};

export default Navbar;
