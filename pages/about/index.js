import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import style from "../../styles/Markdown.module.css";
import Image from "next/image";
import Head from "next/head";

const index = ({ content }) => {
  const aboutObj = content.find((item) => item.slug === "about");
  return (
    <>
      <Head>
        <title>About | Friends of Church Creek | Protected Area Society</title>
      </Head>
      <header
        className="px-[5vw] bg-cover bg-center w-full md:px-10vw "
        style={{
          backgroundImage: `url(${aboutObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="text-white text-center font-medium text-5xl py-24 md:text-6xl md:py-40">
          {aboutObj.title}
        </h1>
      </header>
      <section className="px-[5vw] py-10 md:px-10vw lg:py-14">
        <div className="max-w-[1225px] m-auto lg:flex lg:justify-center lg:bg-gray-200 lg:p-10 lg:py-14">
          <div className="left">
            <div className="max-w-[750px]">
              <ReactMarkdown className={style.about_reactmarkdown}>
                {aboutObj.firstsectiontext}
              </ReactMarkdown>
            </div>
          </div>
          <div className="right flex lg:justify-end pt-10 lg:pt-0 lg:pl-14">
            <Image
              className="w-full lg:min-w-[350px] max-w-[350px] self-center"
              src={aboutObj.firstsectionimg}
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="max-w-[1225px] m-auto flex flex-col-reverse mt-4 md:mt-10 lg:flex lg:flex-row lg:justify-center lg:bg-neutral-200 lg:p-10 lg:py-14">
          <div className="left flex pt-10 lg:pt-0">
            <Image
              className="w-full lg:min-w-[350px] max-w-[450px] self-center"
              src={aboutObj.secondsectionimg}
              width={1000}
              height={1000}
            />
          </div>
          <div className="right lg:pl-14">
            <div className="max-w-[750px]">
              <ReactMarkdown className={style.about_reactmarkdown}>
                {aboutObj.secondsectiontext}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="max-w-[1225px] m-auto mt-4 md:mt-10 lg:flex lg:justify-center lg:bg-gray-200 lg:p-10 lg:py-14">
          <div className="left">
            <div className="max-w-[750px]">
              <ReactMarkdown className={style.about_reactmarkdown}>
                {aboutObj.thirdsectiontext}
              </ReactMarkdown>
            </div>
          </div>
          <div className="right flex lg:justify-end pt-10 lg:pt-0 lg:pl-14">
            <Image
              className="w-full lg:min-w-[350px] max-w-[450px] self-center"
              src={aboutObj.thirdsectionimg}
              width={1000}
              height={1000}
            />
          </div>
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
