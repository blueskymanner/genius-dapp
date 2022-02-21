import Head from "next/head";
import { useRouter } from "next/router";

const siteTitle = "Tokenlaunch Admin";
const description = "Find the best new tokens in Crypto";
const previewImage = "https://tokenlaunch.com/images/og-image.png";

const Header = ({ title = siteTitle, image = previewImage }) => {
  const router = useRouter();

  return (
    <Head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        href="/images/tokenlaunch-logo-apple-touch-icon.png"
      />
      <link
        rel="mask-icon"
        href="/images/tokenlaunch-mask-icon.svg"
        color="#F3B42A"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#F3B42A" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@0xtokenlaunchcom" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Open Graph */}
      <meta property="og:url" content={router.pathname} key="ogurl" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="og:site_name" content="" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <title>{title}</title>
    </Head>
  );
};

export default Header;
