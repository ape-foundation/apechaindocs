import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logo_image_src from './images/apechain-logo.svg';
import og_image_src from './images/apechain-open-graph.png';
import { ThemeSwitch } from './components/ThemeSelector';
import { AskCookbook } from './components/AskCookbook';

const config: DocsThemeConfig = {
  logo: (
    <Image src={logo_image_src} alt={"ApeChain Logo"} width={125} />
  ),
  nextThemes: { defaultTheme: "dark" },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - ApeChain Docs",
      defaultTitle: "ApeChain Docs",
      description: "Official ApeChain Documentation",
      openGraph: {
        images: [
          {
            url: og_image_src.src,
            width: 1200,
            height: 630,
            alt: 'ApeChain Open Graph Image',
          },
        ],
      },
    };
  },
  navigation: false,
  themeSwitch: {
    component: <ThemeSwitch />,
  },
  navbar: {
    extraContent: (
      <div>
        <AskCookbook />
      </div>
    ),
  },
  footer: {
    text: (
      <>
        © {new Date().getFullYear()} Ape Foundation
      </>
    ),
  },
};

export default config;