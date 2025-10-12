import React from 'react'
import { Link } from 'react-router-dom'
import usePosts from '../hooks/usePosts'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import Button from '../components/ui/Button'

const Dashboard = () => {
  const { posts, getPostsByStatus } = usePosts()
  
  const publishedPosts = getPostsByStatus('published')
  const draftPosts = getPostsByStatus('draft')

  const stats = [
    {
      title: 'Total Posts',
      value: posts.length,
      color: 'blue',
      icon: '📝'
    },
    {
      title: 'Published',
      value: publishedPosts.length,
      color: 'green',
      icon: '✅'
    },
    {
      title: 'Drafts',
      value: draftPosts.length,
      color: 'yellow',
      icon: '📋'
    }
  ]

  const recentPosts = posts.slice(0, 5)

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Link to="/create">
          <Button variant="primary" size="large">
            Create New Post
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
        </CardHeader>
        <CardContent>
          {recentPosts.length > 0 ? (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(post.createdAt).toLocaleDateString()} • 
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </p>
                  </div>
                  <Link to={`/edit/${post.id}`}>
                    <Button variant="outline" size="small">
                      Edit
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No posts yet. Create your first post!</p>
              <Link to="/create" className="inline-block mt-4">
                <Button variant="primary">Create Post</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard