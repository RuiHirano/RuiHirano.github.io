import React, { useState, useContext } from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Services } from 'components/landing';


const Root: React.FC = () => {

  return (
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </Layout>
  )
}

export default Root