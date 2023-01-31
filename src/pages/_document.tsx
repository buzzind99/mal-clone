import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <div
          id="video-portal"
          className="relative mx-auto flex w-[66.375rem] justify-center"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
