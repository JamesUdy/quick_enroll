import { useState } from "react";
import EmailRegistrationDialog from "./EmailRegistrationDialog";
import React from "react";

const WelcomeScreen = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = async (email: string) => {
    setIsLoading(true);
    try {
      const url = "https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71";

      const data = {
        name: "JamesUdy",
        email: email,
      };

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        throw new Error(`${response.status}: Failed to register user details`);
      } else {
        setIsRegistered(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex-1 flex flex-col items-center justify-center space-y-10">
      {isRegistered ? (
        <div className="flex flex-col items-center space-y-2 bg-slate-900 p-10 rounded-lg shadow-md shadow-black">
          <span className="text-3xl font-bold mb-2">Congratulations! 🎉</span>
          <p className="text-md text-slate-400 text-center mb-4">
            Your email has been registered successfully.
          </p>
        </div>
      ) : (
        <React.Fragment>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-3xl font-bold mb-2">
              Welcome to Email Enroll
            </span>
            <p className="text-md text-slate-400 text-center mb-4">
              In this platform, you can easily register your email. Just click
              the register button:
            </p>
          </div>
          <EmailRegistrationDialog
            handleFormSubmit={handleFormSubmit}
            isRegistered={isRegistered}
            isLoading={isLoading}
          />
        </React.Fragment>
      )}
    </section>
  );
};

export default WelcomeScreen;
