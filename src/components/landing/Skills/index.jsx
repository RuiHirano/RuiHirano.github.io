import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { useIntl } from "react-intl";
import { Link } from "gatsby"

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const intl = useIntl()

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>{intl.formatMessage({ id: "skills_title" })}</h1>
          <p>
            {intl.formatMessage({ id: "skills_description" })}
          </p>
          <Link to="/about/">
            <Button>
              {intl.formatMessage({ id: "more_about_me" })}
            </Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
