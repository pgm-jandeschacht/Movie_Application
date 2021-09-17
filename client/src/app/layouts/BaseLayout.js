import React from 'react';

import { Header, Footer } from '../components/layout'

import styled from './BaseLayout.module.scss';

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />

      <main className={styled.main}>
        { children }
      </main>
      
      <Footer />
    </>
  )
}

export default BaseLayout;
