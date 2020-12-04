import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { useIntl } from "react-intl";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby"

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const intl = useIntl()

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{intl.formatMessage({ id: "intro_title" })}</h1>
          <h4>{intl.formatMessage({ id: "intro_description" })}</h4>
          <Link to="/about/">
            <Button>
              {intl.formatMessage({ id: "more_about_me" })}
            </Button>
          </Link>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Rui Hirano and I’m a graduate student at Nagoya University in Japan!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
