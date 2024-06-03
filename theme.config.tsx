import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import image_src from './images/logo.svg'

const config: DocsThemeConfig = {
  logo: (
    <Image src={image_src} alt={""} width={100}/>
  ),
  nextThemes: { defaultTheme: "light", forcedTheme: "light" },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - [todo] Testnet Docs",
    };
  },
  navigation: false,
};

export default config;
