import React, { useContext, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import { IntlContext } from 'intl/provider';
import useSelector from '../../../../hooks/useSelector';



const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { changeLanguage } = useContext(IntlContext);
  const { renderSelector } = useSelector(changeSelector)
  function changeSelector({ label, value }) {
    console.log("change2", label, value)
    changeLanguage(value)
  }


  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        Rui Hirano
      </Brand>
      {renderSelector()}
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
