import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <div>
      <h3>Who am I?</h3>
      <p>
        I'm a web developer based in Australia who loves working with React and
        Nextjs and am always up for something new.
      </p>
      <p>
        I primarily focus on Front End Development and typically use Firebase
        for my Authentication and Database needs.
      </p>
      <p>
        I'm always open to hearing about opportunities, so be sure to{" "}
        <Link href={"/contact"}>
          <a>contact me</a>
        </Link>{" "}
        with any questions or opportunities!
      </p>
      <h4>Some of my favourite qualities in a prospective project:</h4>
      <ul>
        <li>
          Indpendent and flexible work (most timezones aren't an issue for me!)
        </li>
        <li>Fast paced and quickly changing projects</li>
        <li>New and exciting ideas</li>
        <li>Anything with stunning designs (think airbnb)</li>
      </ul>
    </div>
  );
}

export default AboutMe;
