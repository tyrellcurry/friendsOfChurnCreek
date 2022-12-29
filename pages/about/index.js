import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import style from "../../styles/About.module.css";

const index = ({ content }) => {
  const aboutObj = content.find((item) => item.slug === "about");
  return (
    <>
      <header
        className="px-10vw bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${aboutObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="py-40 text-white text-6xl text-center font-semibold">
          {aboutObj.title}
        </h1>
      </header>
      <section>
        <div>
          <ReactMarkdown className={style.reactmarkdown}>
            {aboutObj.firstsectiontext}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync("./content/about");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(`./content/about/${filename}`, "utf8");
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
