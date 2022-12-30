import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

const index = ({ content }) => {
  const projectsObj = content.find((item) => item.slug === "projects");
  return (
    <>
      <Head>
        <title>
          Projects | Friends of Church Creek | Protected Area Society
        </title>
      </Head>
      <header
        className="px-[5vw] bg-cover bg-center w-full md:px-10vw"
        style={{
          backgroundImage: `url(${projectsObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="text-white text-center font-medium text-5xl py-24 md:text-6xl md:py-40">
          {projectsObj.title}
        </h1>
      </header>
      <section className="px-[5vw] py-14 md:px-10vw">
        <h2>
          {projectsObj.firstsectiontext}
        </h2>
        <h2>
        Projects fall primarily within three categories:
        </h2>
        <div className="project">
          <h3></h3>
          <p>{}</p>
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync("./content/projects");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(`./content/projects/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      content,
    },
  };
}
