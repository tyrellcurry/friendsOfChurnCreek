import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";

const index = ({ content }) => {
  const eventsObj = content.find((item) => item.slug === "events");
  return (
    <>
      <Head>
        <title>
          Events & Activities | Friends of Church Creek | Protected Area Society
        </title>
      </Head>
      <header
        className="px-[5vw] bg-cover bg-center w-full md:px-10vw"
        style={{
          backgroundImage: `url(${eventsObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="text-white text-center font-medium text-5xl py-24 md:text-6xl md:py-40">
          {eventsObj.title}
        </h1>
      </header>
      <section className="px-[5vw] md:px-10vw pt-5 pb-5">
        <h2 className="font-medium text-2xl md:text-3xl pt-5 pb-2">Upcoming Events</h2>
        <h2 className="md:text-lg pb-5">{eventsObj.firstsectiontext}</h2>
        <div className="flex">
          <div className="left w-full">
            {eventsObj.eventslist.length > 0 ? (
              eventsObj.eventslist.map((event, i) => (
                <div
                  key={i}
                  className="p-6 shadow-lg rounded-lg bg-zinc-100 text-zinc-800 max-w-[600px] mb-7">
                  <h2 className="font-medium text-xl mb-1">Event Date:</h2>
                  <h2 className="text-lg mb-3">
                    {event.eventdate.substring(0, event.eventdate.length - 9)} |{" "}
                    {event.eventtime}
                  </h2>
                  <h3 className="font-medium text-xl mb-1">
                    Event Description:
                  </h3>
                  <p className="text-lg">{event.eventtext}</p>
                </div>
              ))
            ) : (
              <div className="p-6 shadow-lg rounded-lg bg-zinc-100 text-zinc-800 max-w-[375px] mb-5">
                <h2 className="font-medium text-xl mb-1">
                  No upcoming events at this time.
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="px-[5vw] md:px-10vw pb-2">
        <h2 className="text-2xl md:text-3xl font-medium">Activities</h2>
        <h3 className="text-xl font-medium pt-5">Hikes</h3>
        <p className="md:text-lg">
          Three or more day hikes are organized for members each summer. Many of
          these access areas seldom visited by the general public and they
          usually have a natural history, cultural history or protected area
          management focus. Spectacular scenery is a part of most hikes.
        </p>
      </section>
      <section className="px-[5vw] md:px-10vw pb-12">
        <div className="max-w-[800px]">
          <div className="accordion pt-5" id="accordianMain">
                <div
                  id={`carousel`}
                  className="carousel slide carousel-fade relative max-h-[525px]"
                  data-bs-ride="carousel">
                  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                      type="button"
                      data-bs-target={`#carousel`}
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"></button>
                    {eventsObj.activityimages.length > 0 &&
                      eventsObj.activityimages.map((image, i) =>
                        i < eventsObj.activityimages.length - 1 ? (
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
                    {eventsObj.activityimages.length > 0 &&
                      eventsObj.activityimages.map((image, i) => (
                        <div
                          key={i}
                          className={`carousel-item ${
                            i < 1 ? "active" : ""
                          } float-left w-full`}>
                          <Image
                            width={1200}
                            height={1200}
                            src={image.image}
                            className="block w-full h-[300px] md:h-[525px] object-cover object-top"
                            alt="Carousel Image"
                          />
                        </div>
                      ))}
                  </div>
                  <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target={`#carousel`}
                    data-bs-slide="prev">
                    <span
                      className="carousel-control-prev-icon inline-block bg-no-repeat"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target={`#carousel`}
                    data-bs-slide="next">
                    <span
                      className="carousel-control-next-icon inline-block bg-no-repeat"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync("./content/events");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(`./content/events/${filename}`, "utf8");
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
