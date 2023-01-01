import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

const index = ({ content }) => {
  const membershipDonationsObj = content.find(
    (item) => item.slug === "membershipdonations"
  );
  return (
    <>
      <Head>
        <title>
          Membership & Donations | Friends of Church Creek | Protected Area
          Society
        </title>
      </Head>
      <header
        className="px-[5vw] bg-cover bg-center w-full md:px-10vw"
        style={{
          backgroundImage: `url(${membershipDonationsObj.bannerimg})`,
          backgroundPosition: "center",
          backgroundColor: "hsla(0, 0%, 0%, 0.35)",
          backgroundBlendMode: "multiply",
        }}>
        <h1 className="text-white text-center font-medium text-5xl py-24 md:text-6xl md:py-40">
          {membershipDonationsObj.title}
        </h1>
      </header>
      <section className="px-[5vw] md:px-10vw text-center text-2xl font-medium py-12 bg-gray-50">
        <h2>&quot;Thank you for considering membership with the Friends of Churn Creek P.A. Society.&quot;</h2>
      </section>
      <section className="px-[5vw] text-center md:px-10vw py-10 bg-gray-200">
        <div className="md:flex">
          <div className="left pb-7 md:w-1/2 md:px-5 md:pb-0">
            <h2 className="text-3xl font-medium pb-7">Make a Donation Today</h2>
            <div>
              <Link
                href={membershipDonationsObj.donationlink}
                target="_blank">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                  Donate Online
                </button>
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-medium pb-3 pt-7">
                Mail a Donation
              </h2>
            </div>
            <div>
              <h3 className="text-lg font-medium pb-1">Address:</h3>
              <p className="max-w-[375px] m-auto">
                {membershipDonationsObj.mailingaddress}
              </p>
            </div>
          </div>
          <div className="right md:w-1/2 md:px-5">
            <h2 className="text-3xl font-medium pb-7">Become A Member</h2>
            <Link
              href={membershipDonationsObj.membershiplink}
              target="_blank">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Signup Online
              </button>
            </Link>
            <h3 className="pt-7 text-xl font-medium">
              Individual membership fees:
            </h3>
            <ul className="text-lg">
              <li className="pt-1">Single Membership: {membershipDonationsObj.singlemembership}</li>
              <li className="pt-1">Family Membership: {membershipDonationsObj.familymembership}</li>
            </ul>
          </div>
        </div>
        <p className="pt-20 md:w-1/2 m-auto italic text-sm">
          {membershipDonationsObj.bottomnotice}
        </p>
      </section>
      <section></section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync("./content/membershipdonations");

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map((filename) => {
    const file = fs.readFileSync(
      `./content/membershipdonations/${filename}`,
      "utf8"
    );
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
