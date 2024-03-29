import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

const index = ({ content }) => {
  const contactObj = content.find((item) => item.slug === "contact");
  return (
    <>
      <Head>
        <title>
          Resources | Friends of Church Creek | Protected Area Society
        </title>
      </Head>
      <header
        className="px-[5vw] bg-cover bg-center w-full md:px-10vw"
        style={{
          backgroundImage: `url(${contactObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="text-center font-medium text-5xl py-24 text-white md:text-6xl md:py-40">
          {contactObj.title}
        </h1>
      </header>
      <section className="px-[5vw] md:px-10vw py-8 lg:py-12 lg:pb-14">
        <div>
          <h2 className="md:text-center text-2xl md:text-3xl font-medium pb-5">
            Send Us A Message
          </h2>
        </div>
        <div className="pb-10">
          <div className="max-w-[800px] m-auto">
            <form
              className="flex flex-col gap-4"
              action={`https://formsubmit.co/${contactObj.contactformemail}`}
              method="POST">
              <div className="flex flex-col">
                <label className="pb-1 font-medium" htmlFor="name">
                  Full Name:
                </label>
                <input
                  className="border-solid border-2 border-zinc-700 p-2"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="pb-1 font-medium" htmlFor="email">
                  Email:
                </label>
                <input
                  className="border-solid border-2 border-zinc-700 p-2"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="pb-1 font-medium" htmlFor="phone">
                  Phone Number (optional):
                </label>
                <input
                  className="border-solid border-2 border-zinc-700 p-2"
                  type="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div className="flex flex-col">
                <label className="pb-1 font-medium" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="form-control border-solid border-2 border-zinc-700 p-2"
                  placeholder="Your Message"
                  name="message"
                  rows="10"
                  required></textarea>
              </div>
              <button
                className="bg-zinc-700 text-white self-start py-3 px-12 text-lg hover:bg-zinc-600 transition duration-100 ease-in-out"
                type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="md:text-center pb-8">
          <h2 className="text-xl font-medium pb-2">General Mailing Address:</h2>
          <p className="md:max-w-[375px] md:m-auto">
            {contactObj.mailingaddress}
          </p>
        </div>
        <div className="md:w-fit m-auto">
          <h2 className="md:text-center text-lg font-medium pb-2">
            {contactObj.executivecontacttitle}:
          </h2>
          <div className="hidden md:flex gap-8">
            <div className="font-medium">
              {contactObj.executivecontact.length > 0 &&
                contactObj.executivecontact.map((contact, i) => (
                  <p key={i}>{contact.role}</p>
                ))}
            </div>
            <div>
              {contactObj.executivecontact.length > 0 &&
                contactObj.executivecontact.map((contact, i) => (
                  <p key={i}>{contact.name}</p>
                ))}
            </div>
            <div>
              {contactObj.executivecontact.length > 0 &&
                contactObj.executivecontact.map((contact, i) => (
                  <p key={i}>{contact.phone}</p>
                ))}
            </div>
            <div className="flex flex-col">
              {contactObj.executivecontact.length > 0 &&
                contactObj.executivecontact.map((contact, i) => (
                  <a
                    key={i}
                    className="text-blue-700 hover:text-blue-800"
                    href={contact.email}>
                    {contact.email}
                  </a>
                ))}
            </div>
          </div>
          <div className="md:hidden">
          {contactObj.executivecontact.length > 0 &&
                contactObj.executivecontact.map((contact, i) => (
                  <div key={i} className="pb-2">
                    <div className="flex gap-2">
                    <p className="font-medium">{contact.name}</p>
                    <p>-</p>
                    <p>{contact.role}</p>
                    </div>
                    <p>{contact.phone}</p>
                    <a
                    className="text-blue-700 hover:text-blue-800"
                    href={contact.email}>
                    {contact.email}
                  </a>
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
  const filesInContent = fs.readdirSync("./content/contact");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(`./content/contact/${filename}`, "utf8");
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
