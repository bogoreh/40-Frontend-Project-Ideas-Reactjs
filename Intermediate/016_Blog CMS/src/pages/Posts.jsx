import React, { useState } from 'react'
import usePosts from '../hooks/usePosts'
import BlogCard from '../components/blog/BlogCard'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Link } from 'react-router-dom'

const Posts = () => {
  const { posts, deletePost, loading } = usePosts()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deletePost(id)
    }
  }

  const stats = {
    all: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    draft: posts.filter(p => p.status === 'draft').length
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
        <Link to="/create">
          <Button variant="primary" size="large">
            Create New Post
          </Button>
        </Link>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status ({stats.all})</option>
              <option value="published">Published ({stats.published})</option>
              <option value="draft">Draft ({stats.draft})</option>
            </select>
            
            <div className="text-sm text-gray-600 flex items-center">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Grid */}
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-500 mb-4">
              {posts.length === 0 
                ? "You haven't created any posts yet." 
                : "No posts match your current filters."}
            </p>
            <Link to="/create">
              <Button variant="primary">Create Your First Post</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Posts