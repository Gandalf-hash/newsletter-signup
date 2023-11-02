import React from "react";
import { Link } from "react-router-dom";

function SuccessBannerMessage() {
  return (
    <div className="min-h-screen max-w-full p-8 w-full items-center xl:bg-primary-color flex justify-center">
      <div className="md:px-16 md:py-6 max-w-md border-text-color rounded-3xl bg-text-color flex flex-col  text-primary-color">
        <img
          src="/images/icon-list.svg"
          className="mb-8"
          width={60}
          height={60}
          alt="Icon List"
        />
        <div className="mb-8 flex flex-col space-y-6">
          <h1 className="font-bold text-4xl md:text-6xl ">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to {`email`} Please open it and
            click the button inside to confirm your subscription{" "}
          </p>
          <Link to="/">
            <button className="rounded-md w-full max-w-md mt-4 font-bold px-2 py-4 bg-primary-color text-text-color">
              Dismiss message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessBannerMessage;
