import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

const index = ({ content }) => {
  const resourcesObj = content.find((item) => item.slug === "resources");
  return (
    <>
      <Head>
        <title>
          Resources | Friends of Church Creek | Protected Area
          Society
        </title>
      </Head>
      <header
        className="px-[5vw] bg-cover bg-center w-full md:px-10vw"
        style={{
          backgroundImage: `url(${resourcesObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="text-white text-center font-medium text-5xl py-24 md:text-6xl md:py-40">
          {resourcesObj.title}
        </h1>
      </header>
      <section className="px-[5vw] md:px-10vw py-6 md:py-8">
        <h2 className="pb-5 text-xl">{resourcesObj.firstsectiontext}</h2>
        <div>
          <h2 className="text-2xl font-medium pb-3">Resources:</h2>
          {resourcesObj.resourceslist.length > 0 &&
            resourcesObj.resourceslist.map((resource, i) => (
              <div key={i} className="pb-3">
                <h3 className="text-lg font-medium">{resource.linktitle}</h3>
                <h4 className="text-base pb-1 lg:pb-0">{resource.linksubtitle}</h4>
                <div className="text-sm lg:flex gap-2">
                  <p className="pb-3 lg:pb-0">{resource.linktext}</p>
                  {resource.documentfile ? (
                    <a className="text-blue-600 whitespace-nowrap hover:text-blue-800" href={resource.documentfile}target="_blank" rel="noreferrer">[Download PDF]</a>
                  ) : resource.urllink ? (
                    <a className="text-blue-600 whitespace-nowrap hover:text-blue-800" href={resource.urllink} target="_blank" rel="noreferrer">[Visit Website]</a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync("./content/resources");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(`./content/resources/${filename}`, "utf8");
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
