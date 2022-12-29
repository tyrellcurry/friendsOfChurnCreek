import fs from 'fs'
import matter from 'gray-matter'

const index = ({content}) => {
  const resourcesObj = content.find(item => item.slug === 'resources');
  return (
    <div>{resourcesObj.title}</div>
  )
}

export default index


export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync('./content/resources')

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map(filename => {
    const file = fs.readFileSync(`./content/resources/${filename}`, 'utf8')
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