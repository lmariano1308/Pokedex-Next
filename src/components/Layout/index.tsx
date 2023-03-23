import Head from "next/head";
import React, { FC, type ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { LayoutContainer } from "./styles";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({children}) => {
  return <>
  <Head>
    <link rel="icon" href="/favicon/favicon.ico" />
    <title>Nextdex</title>
  </Head>
    <Navbar />
      <LayoutContainer>
        {children}
      </LayoutContainer>
    <Footer />
  </>
};

export default Layout;
