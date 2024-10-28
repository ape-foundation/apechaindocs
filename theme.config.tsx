import React, { useEffect } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/router';
import logo_image_src from './images/apechain-logo.svg';
import og_image_src from './images/apechain-open-graph.jpg';
import { ThemeSwitch } from './components/ThemeSelector';
import { AskCookbook } from './components/AskCookbook';

const HideStepsInTOC = () => {
  useEffect(() => {
    // Hide "Step" links in the "On this page" TOC
    document.querySelectorAll('.on-this-page a').forEach(link => {
      if (link.textContent.includes("Step")) {
        link.style.display = "none";
      }
    });
  }, []);

  return null;
};

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
  feedback: {
    content: 'Contribute to Docs',
    useLink() {
      const router = useRouter();
      const currentPath = router.pathname;
      const repoUrl = 'https://github.com/ape-foundation/apechaindocs/issues/new';
      const title = encodeURIComponent(`Feedback for “${currentPath}”`);
      const labels = encodeURIComponent('feedback');
      
      return `${repoUrl}?title=${title}&labels=${labels}`;
    },
  },
  editLink: {
    text: '',
  },
  head: (
    <Head>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.css"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/toolbar/prism-toolbar.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
    </Head>
  ),
};

// Render the HideStepsInTOC component within your app to ensure the script runs
export default function MyApp() {
  return (
    <>
      <HideStepsInTOC />
      {/* Render the rest of your app using config */}
    </>
  );
}
