import { useParams } from 'react-router-dom'
import './Post.css'

function Post() {
  const { id } = useParams()
  
  return (
    <div className="post">
      <div className="container">
        <h1>Post #{id}</h1>
        <p>This is the content for post {id}. Individual post pages will be implemented here.</p>
      </div>
    </div>
  )
}

export default Post