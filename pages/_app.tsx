import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify"
import { NextSeo } from 'next-seo'
import Script from 'next/script';
import ReactGA from "react-ga4";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  const handleAcceptCookie = () => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID as string)
  }


  
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
  <>
        <NextSeo
        title="Free Cover Letter Generator | Covered"
        description="If you're looking for a hassle-free way to create a cover letter, look no further than our AI cover letter service! With our easy-to-use online platform, you'll be able to create a personalized cover letter in minutes, without having to worry about formatting or grammar mistakes."
        canonical="https://covered-ai.netlify.app"
        openGraph={{
          url: "https://res.cloudinary.com/dw9t4raq4/image/upload/v1668977051/Covered_cup7vq.png",
          title: "Covered",
          description:
            "If you're looking for a hassle-free way to create a cover letter, look no further than our AI cover letter service! With our easy-to-use online platform, you'll be able to create a personalized cover letter in minutes, without having to worry about formatting or grammar mistakes.",
          images: [
            {
              url: "https://res.cloudinary.com/dw9t4raq4/image/upload/v1668977051/Covered_cup7vq.png",
              width: 800,
              height: 600,
              alt: "Covered",
              type: "image/png"
            },
            {
              url: "https://res.cloudinary.com/dw9t4raq4/image/upload/v1668977051/Covered_cup7vq.png",
              width: 900,
              height: 800,
              alt: "Covered",
              type: "image/jpeg"
            }
          ],
          site_name: "Covered"
        }}
        twitter={{
          handle: "@momito8_",
          site: "@momit8_",
          cardType: "summary_large_image"
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: false,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "free cover letter, cover letter generator, AI cover letter generator"
          }
        ]}
      />
<CookieConsent
  location="bottom"
  buttonText="Accept"
  acceptOnScroll={true}
  overlay={true}
  acceptOnOverlayClick={true}
  enableDeclineButton={true}
  declineButtonStyle={{ background: '#fff', color: '#000', border: '2px solid #000'}}
  declineButtonText="Decline"
  cookieName="covered-cookie"
  style={{ background: '#fff', color: '#000'}}
  buttonStyle={{ background: '#000', color: '#fff', border: '2px solid #000'}}
  expires={150}
  onAccept={handleAcceptCookie}




>This website uses cookies to enhance the user experience.</CookieConsent>
        <Component {...pageProps} />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>

    );
  }
}