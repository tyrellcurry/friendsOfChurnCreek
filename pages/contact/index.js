import fs from 'fs'
import matter from 'gray-matter'

const index = ({content}) => {
  const contactObj = content.find(item => item.slug === 'contact');
  return (
    <div>{contactObj.title}</div>
  )
}

export default index


export async function getStaticProps() {
  // Finds files in folder
  const filesInContent = fs.readdirSync('./content/contact')

  // Get the front matter and slug (the filename without .md) of all files
  const content = filesInContent.map(filename => {
    const file = fs.readFileSync(`./content/contact/${filename}`, 'utf8')
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