// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsListItems} = props

  return (
    <ul className="blogs-list-container">
      {blogsListItems.map(eachItem => (
        <BlogItem key={eachItem.id} eachBlog={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList
