import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard({ post }) {
  return (
    <article className="post-card">
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <span className="post-author">By {post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <Link to={`/post/${post.id}`} className="read-more">
          Read More
        </Link>
      </div>
    </article>
  )
}

export default PostCard