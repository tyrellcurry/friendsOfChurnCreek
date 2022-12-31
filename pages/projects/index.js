import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import "tw-elements";
import Style from "../../styles/Custom.module.css";

const index = ({ content }) => {
  const projectsObj = content.find((item) => item.slug === "projects");
  console.log(projectsObj);
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
        <h2 className="text-lg">{projectsObj.firstsectiontext}</h2>
        <div className="max-w-[1100px] pt-5">
          <h2 className="text-2xl font-medium pt-5">
            Projects fall primarily within three categories:
          </h2>
          <div class="accordion pt-5" id="accordianMain">
            {projectsObj.projectslist.length > 0 &&
              projectsObj.projectslist.map((project, i) => (
                <div key={i} class="accordion-item bg-gray-100 border border-gray-200">
                  <h2 class="accordion-header mb-0" id={`heading${i}`}>
                    <button
                      class={`
                      accordion-button
                      relative
                      flex
                      items-center
                      w-full
                      p-4
                      text-xl 
                      font-medium 
                      text-gray-800 
                      text-left
                      bg-white
                      border-0
                      rounded-none
                      transition
                      focus:outline-none
                      ${i < 1 ? "" : "collapsed"}
                    `}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseOne${i}`}
                      aria-expanded={`${i < 1 ? "true" : "false"}`}
                      aria-controls={`collapseOne${i}`}>
                      {project.listitemtitle}
                    </button>
                  </h2>
                  <div
                    id={`collapseOne${i}`}
                    class={`accordion-collapse collapse ${i < 1 ? "show" : ""}`}
                    aria-labelledby={`heading${i}`}
                    data-bs-parent={`accordian${i}`}>
                    <div class="accordion-body p-7">
                      <div key={i} className="project">
                        <p className="pb-5">{project.listitemtext}</p>
                        <div
                          id={`carousel${i}`}
                          className="carousel slide carousel-fade relative max-h-[525px]"
                          data-bs-ride="carousel">
                          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                              type="button"
                              data-bs-target={`#carousel${i}`}
                              data-bs-slide-to="0"
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"></button>
                            {project.imageslist.length > 0 &&
                              project.imageslist.map((image, i) =>
                                i < project.imageslist.length - 1 ? (
                                  <button
                                    key={i}
                                    type="button"
                                    data-bs-target={`#carousel${i}`}
                                    data-bs-slide-to={`${i + 1}`}
                                    aria-label={`Slide ${i + 1}`}></button>
                                ) : (
                                  ""
                                )
                              )}
                          </div>
                          <div className="carousel-inner relative w-full overflow-hidden max-h-[525px]">
                            {project.imageslist.length > 0 &&
                              project.imageslist.map((image, i) => (
                                <div
                                  key={i}
                                  className={`carousel-item ${
                                    i < 1 ? "active" : ""
                                  } float-left w-full`}>
                                  <img
                                    src={image.listitemimg}
                                    className="block w-full h-[300px] md:h-[525px] object-cover object-top"
                                    alt="Carousel Image"
                                  />
                                </div>
                              ))}
                          </div>
                          <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target={`#carousel${i}`}
                            data-bs-slide="prev">
                            <span
                              className="carousel-control-prev-icon inline-block bg-no-repeat"
                              aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target={`#carousel${i}`}
                            data-bs-slide="next">
                            <span
                              className="carousel-control-next-icon inline-block bg-no-repeat"
                              aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
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
