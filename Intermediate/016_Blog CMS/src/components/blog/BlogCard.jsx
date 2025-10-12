import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const BlogCard = ({ post, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {post.title}
          </h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            post.status === 'published' 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {post.status}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {truncateContent(post.content)}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>Created: {formatDate(post.createdAt)}</span>
          {post.updatedAt !== post.createdAt && (
            <span>Updated: {formatDate(post.updatedAt)}</span>
          )}
        </div>
        
        <div className="flex space-x-3">
          <Link to={`/edit/${post.id}`}>
            <Button variant="outline" size="small">
              Edit
            </Button>
          </Link>
          <Button 
            variant="error" 
            size="small"
            onClick={() => onDelete(post.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard