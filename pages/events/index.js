import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head';

const index = ({content}) => {
  const eventsObj = content.find(item => item.slug === 'events');
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
      <section>
        <h2>Upcoming Events</h2>
      </section>
      <section>
        <h2>
          {eventsObj.firstsectiontext}
        </h2>
      </section>
    </>
  )
}

export default index


export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync('./content/events')

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map(filename => {
    const file = fs.readFileSync(`./content/events/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      content
    }
  }

}