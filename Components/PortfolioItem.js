import Image from "next/image";
import React from "react";
import Link from "next/link";

function PortfolioItem({
  projectTitle,
  projectPageName,
  description,
  techStack = [],
  imageSrc,
  imageAlt,
}) {
  return (
    <div>
      {/* <div>
        <Image src={imageSrc} alt={imageAlt} layout={"fill"} />
      </div> */}
      <div>
        <h3>{projectTitle}</h3>
        <p>{description}</p>
        {techStack.map((technology) => (
          <div>{technology}</div>
        ))}
        <Link href={"/" + projectPageName}>
          <a>read more</a>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioItem;
