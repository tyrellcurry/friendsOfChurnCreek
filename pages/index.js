import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Link from "next/link";
import style from "../styles/Markdown.module.css";
import Image from "next/image";

export default function Home({ content }) {
  const homepageObj = content.find((item) => item.slug === "home");
  return (
    <>
      <Head>
        <title>Friends of Church Creek | Protected Area Society</title>
      </Head>
      <div>
        <div
          className="hero px-10vw bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${homepageObj.heroimage})`, backgroundPosition: 'center', backgroundColor: 'hsla(0, 0%, 0%, 0.35)', backgroundBlendMode: 'multiply'
          }}>
          <div className="py-20 lg:py-44">
            <h1 className="text-center text-5xl font-medium md:text-7xl">{homepageObj.title}</h1>
            <h2 className="text-center pt-5 m-auto text-xl md:w-4/5 md:text-2xl">
              {homepageObj.subtitle}
            </h2>
            <div className="btn text-center pt-9">
              <button
                className="bg-gray-600 py-3 px-8 text-lg font-medium tracking-wide"
                onClick={() => {
                  document.querySelector(".intro").scrollIntoView();
                }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="intro px-10vw pt-14">
          <h2 className="text-4xl uppercase text-center">Introduction</h2>
          <ReactMarkdown className={`${style.home_reactmarkdown} pt-5 text-center md:text-left`}>
            {homepageObj.introtext}
          </ReactMarkdown>
        </div>
        <section className="px-10vw py-10 pb-14 md:py-14 lg:flex xl:items-center lg:gap-10">
          <div className="left pb-5">
            <Image
              className="w-full h-auto max-w-[650px] md:min-w-[400px]"
              src={homepageObj.principalimg}
              width={1000}
              height={1000}
              alt="Group of hikers looking over mountain"
            />
          </div>
          <div className="right">
            <div className="text">
              <h3 className="text-xl font-semibold">Our principal goals are:</h3>
              <ul className="list-disc pl-5 pt-2">
                {homepageObj.principalgoals.map((principal, i) => (
                  <li key={i} className="pt-1">
                    {principal.listitem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="downloads pt-5">
              <h2 className="font-semibold text-xl">For reading, printing or download:</h2>
              <ul className="document-list max-w-[800px] list-disc ml-5 pt-3">
                {homepageObj.documentlist.map((document, i) => (
                  <li key={i} className="pb-1">
                    <Link
                      href={
                        document.documentfile
                          ? document.documentfile
                          : document.urllink
                          ? document.urllink
                          : "#"
                      }
                      target="_blank"
                      className="text-blue-800 text-semibold">
                      {document.linktext}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync("./content/home");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(`./content/home/${filename}`, "utf8");
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
