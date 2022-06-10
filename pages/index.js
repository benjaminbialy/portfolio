import AboutMe from "../Components/AboutMe";
import FindMe from "../Components/FindMe";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import PortfolioItem from "../Components/PortfolioItem";

export default function Home() {
  const portfolioItems = [
    {
      projectTitle: "recall | e-Learning platform",
      projectPageName: "recall",
      description:
        "recall is a site offering active recall study tools such as automated tests, flashcards and spaced repeition modes.",
      techStack: [
        "Next.js",
        "TipTapEditor",
        "Firebase Authentication",
        "Google Cloud Firestore",
      ],
      imageSrc: "/recallCover",
      imageAlt: "recall Demo Image",
    },
  ];

  return (
    <div className="flex flex-col w-screen items-center ">
      <NavBar />
      <Hero />
      <AboutMe />
      <div>
        <h3>My past work</h3>{" "}
        {portfolioItems.map((item) => (
          <PortfolioItem
            projectTitle={item.projectTitle}
            projectPageName={item.projectPageName}
            description={item.description}
            techStack={[...item.techStack]}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
      <FindMe />
    </div>
  );
}
