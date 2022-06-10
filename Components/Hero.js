import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <h1>Hey there!</h1>
      <h4>
        Welcome to my portfolio, I'm a freelance web developer with a love for
        building new things!
      </h4>
      <Button text={"View my work"} />
    </div>
  );
}
