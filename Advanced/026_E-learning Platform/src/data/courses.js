export const categories = [
  { name: 'Web Development', icon: '💻', courses: 124 },
  { name: 'Data Science', icon: '📊', courses: 89 },
  { name: 'Mobile Development', icon: '📱', courses: 67 },
  { name: 'Design', icon: '🎨', courses: 93 },
  { name: 'Business', icon: '💼', courses: 156 },
  { name: 'Marketing', icon: '📈', courses: 78 }
]

export const featuredCourses = [
  {
    id: 1,
    title: 'Complete React Developer Course',
    description: 'Learn React from scratch and build real-world applications',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    category: 'Web Development',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    reviews: 1247,
    price: 89.99,
    duration: '24 hours',
    level: 'Intermediate',
    students: 15420
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Master Python and data analysis with hands-on projects',
    thumbnail: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400',
    category: 'Data Science',
    instructor: 'Mike Chen',
    rating: 4.7,
    reviews: 892,
    price: 79.99,
    duration: '18 hours',
    level: 'Beginner',
    students: 9876
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn design principles and create beautiful interfaces',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    category: 'Design',
    instructor: 'Emma Davis',
    rating: 4.9,
    reviews: 654,
    price: 69.99,
    duration: '16 hours',
    level: 'Beginner',
    students: 7654
  }
]

export const allCourses = [
  ...featuredCourses,
  {
    id: 4,
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile apps with Flutter and Dart',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
    category: 'Mobile Development',
    instructor: 'Alex Rodriguez',
    rating: 4.6,
    reviews: 543,
    price: 94.99,
    duration: '28 hours',
    level: 'Intermediate',
    students: 6543
  },
  {
    id: 5,
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, and growth strategies',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    category: 'Marketing',
    instructor: 'Lisa Wang',
    rating: 4.5,
    reviews: 432,
    price: 59.99,
    duration: '20 hours',
    level: 'All Levels',
    students: 5432
  },
  {
    id: 6,
    title: 'Business Fundamentals',
    description: 'Essential business concepts for entrepreneurs',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
    category: 'Business',
    instructor: 'David Smith',
    rating: 4.4,
    reviews: 321,
    price: 0,
    duration: '12 hours',
    level: 'Beginner',
    students: 8765
  }
]

export const enrolledCourses = [
  {
    ...featuredCourses[0],
    progress: 75,
    lastAccessed: '2 days ago'
  },
  {
    ...featuredCourses[1],
    progress: 30,
    lastAccessed: '1 week ago'
  },
  {
    ...allCourses[3],
    progress: 100,
    lastAccessed: '3 weeks ago'
  }
]