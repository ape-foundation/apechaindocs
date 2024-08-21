import dynamic from "next/dynamic";
import type { AskCookbookConfig } from "@cookbookdev/docsbot/dist/react/index";

const BaseAskCookbook = dynamic<AskCookbookConfig>(() => import("@cookbookdev/docsbot/react"), {
  ssr: false,
});

/** It's going to be exposed in HTTP requests anyway so it's fine to just hardcode it here */
const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmM0ZTM3ZjA3YjU4YTU0ZjNiN2VmMGMiLCJpYXQiOjE3MjQxNzkzMjcsImV4cCI6MjAzOTc1NTMyN30.3X1Sd71U-TmqcolHoFZypPOJT_itCC2uE8fmeQa3znM";

export const AskCookbook = () => {
  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
};
