import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const usePosts = () => {
  const [posts, setPosts] = useLocalStorage('blog-posts', [])
  const [loading, setLoading] = useState(false)

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  const createPost = (postData) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost = {
          id: generateId(),
          title: postData.title,
          content: postData.content,
          status: postData.status,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
        
        setPosts(prev => [newPost, ...prev])
        setLoading(false)
        resolve(newPost)
      }, 500)
    })
  }

  const updatePost = (id, postData) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        setPosts(prev => prev.map(post => 
          post.id === id 
            ? { 
                ...post, 
                ...postData, 
                updatedAt: new Date().toISOString() 
              }
            : post
        ))
        setLoading(false)
        resolve()
      }, 500)
    })
  }

  const deletePost = (id) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        setPosts(prev => prev.filter(post => post.id !== id))
        setLoading(false)
        resolve()
      }, 500)
    })
  }

  const getPost = (id) => {
    return posts.find(post => post.id === id)
  }

  const getPostsByStatus = (status) => {
    return posts.filter(post => post.status === status)
  }

  return {
    posts,
    loading,
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPostsByStatus
  }
}

export default usePosts