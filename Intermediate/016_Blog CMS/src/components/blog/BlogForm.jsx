import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card'

const BlogForm = ({ onSubmit, initialData = {}, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    status: initialData.status || 'draft',
    ...initialData
  })

  const [errors, setErrors] = useState({})

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required'
    } else if (formData.content.length < 50) {
      newErrors.content = 'Content must be at least 50 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">
          {isEditing ? 'Edit Post' : 'Create New Post'}
        </h2>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <Input
            label="Post Title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Enter a compelling title..."
            error={errors.title}
            required
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Write your blog post content here..."
              rows={12}
              className={`
                w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                ${errors.content ? 'border-red-500' : 'border-gray-300'}
              `}
            />
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}
            <p className="text-sm text-gray-500">
              {formData.content.length} characters
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end space-x-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {isEditing ? 'Update Post' : 'Create Post'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default BlogForm