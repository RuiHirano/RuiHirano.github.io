import React, { useState, useContext } from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Services } from 'components/landing';

import { default as IntlProvider } from "../intl/provider";
import StoreProvider from 'store';

const Root = () => {

  return (
    <StoreProvider>
      <IntlProvider>
        <Layout>
          <SEO />
          <Intro />
          <Projects />
          <Services />
          <Skills />
          <Contact />
        </Layout>
      </IntlProvider>
    </StoreProvider>
  )
}

export default Root