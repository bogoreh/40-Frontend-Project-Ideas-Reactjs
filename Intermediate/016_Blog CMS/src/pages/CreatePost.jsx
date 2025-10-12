import React from 'react'
import { useNavigate } from 'react-router-dom'
import usePosts from '../hooks/usePosts'
import BlogForm from '../components/blog/BlogForm'

const CreatePost = () => {
  const { createPost, loading } = usePosts()
  const navigate = useNavigate()

  const handleSubmit = async (postData) => {
    await createPost(postData)
    navigate('/posts')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
      </div>
      
      <BlogForm 
        onSubmit={handleSubmit}
        isEditing={false}
      />
      
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-gray-600">Creating post...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreatePost