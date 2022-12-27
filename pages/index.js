import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'

export default function Home({ content }) {
  const homepageObj = content.find(item => item.slug === 'home');
  return (
    <>
      <Head>
        <title>Friends of Church Creek | Protected Area Society</title>
      </Head>
      <div>
        <div className="hero px-10vw py-20 bg-cover bg-center text-white" style={{backgroundImage:`url(${homepageObj.heroimage})`}}>
          <div className='pt-4'>
            <h1 className='text-7xl text-center'>{homepageObj.title}</h1>
            <h2 className='text-2xl text-center pt-4'>{homepageObj.subtitle}</h2>
            <div className="btn text-center pt-7">
              <Link className='bg-slate-600 py-3 px-8 text-lg font-semibold' href="#about">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="intro">
          <h2>Introduction</h2>
          <p>{homepageObj.introtext}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync('./content/home')

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map(filename => {
    const file = fs.readFileSync(`./content/home/${filename}`, 'utf8')
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
