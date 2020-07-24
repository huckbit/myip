import React from "react";
import CookieConsent from "react-cookie-consent";

function Gdpr() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Got it!"
        cookieName="myIpCC"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          borderRadius: "5px",
          padding: "10px 15px",
          fontSize: "16px",
          "&:hover": {
            color: "red",
          },
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <a
          className="has-text-white"
          href="https://www.cookiesandyou.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </CookieConsent>
    </div>
  );
}

export default Gdpr;
