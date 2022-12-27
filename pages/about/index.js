import fs from 'fs'
import matter from 'gray-matter'

const aboutPage = ({content}) => {
  const aboutObj = content.find(item => item.slug === 'about');
  return (
    <div>{aboutObj.title}</div>
  )
}

export default aboutPage


export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync('./content/about')

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map(filename => {
    const file = fs.readFileSync(`./content/about/${filename}`, 'utf8')
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