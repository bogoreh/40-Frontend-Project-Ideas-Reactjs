import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import usePosts from '../hooks/usePosts'
import BlogForm from '../components/blog/BlogForm'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getPost, updatePost, loading } = usePosts()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const foundPost = getPost(id)
    if (foundPost) {
      setPost(foundPost)
    } else {
      navigate('/posts')
    }
  }, [id, getPost, navigate])

  const handleSubmit = async (postData) => {
    await updatePost(id, postData)
    navigate('/posts')
  }

  if (!post) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading post...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
      </div>
      
      <BlogForm 
        onSubmit={handleSubmit}
        initialData={post}
        isEditing={true}
      />
      
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-gray-600">Updating post...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditPost