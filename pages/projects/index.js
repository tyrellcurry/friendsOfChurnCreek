import fs from 'fs'
import matter from 'gray-matter'

const index = ({content}) => {
  const projectsObj = content.find(item => item.slug === 'projects');
  return (
    <div>{projectsObj.title}</div>
  )
}

export default index


export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync('./content/projects')

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map(filename => {
    const file = fs.readFileSync(`./content/projects/${filename}`, 'utf8')
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