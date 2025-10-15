export const musicData = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "pop",
    year: 2020,
    popularity: 95,
    duration: "3:20",
    emoji: "💡",
    features: {
      energy: 85,
      danceability: 90
    }
  },
  {
    id: 2,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "rock",
    year: 1975,
    popularity: 98,
    duration: "5:55",
    emoji: "👑",
    features: {
      energy: 92,
      danceability: 45
    }
  },
  {
    id: 3,
    title: "Take Five",
    artist: "Dave Brubeck",
    album: "Time Out",
    genre: "jazz",
    year: 1959,
    popularity: 88,
    duration: "5:24",
    emoji: "🎹",
    features: {
      energy: 65,
      danceability: 70
    }
  },
  {
    id: 4,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    genre: "rock",
    year: 1971,
    popularity: 96,
    duration: "8:02",
    emoji: "🌄",
    features: {
      energy: 88,
      danceability: 35
    }
  },
  {
    id: 5,
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep",
    genre: "pop",
    year: 2019,
    popularity: 92,
    duration: "3:14",
    emoji: "😈",
    features: {
      energy: 78,
      danceability: 85
    }
  },
  {
    id: 6,
    title: "Moonlight Sonata",
    artist: "Beethoven",
    album: "Classical Masterpieces",
    genre: "classical",
    year: 1801,
    popularity: 85,
    duration: "6:20",
    emoji: "🌙",
    features: {
      energy: 45,
      danceability: 20
    }
  },
  {
    id: 7,
    title: "Around the World",  // Fixed: Added colon here
    artist: "Daft Punk",
    album: "Homework",
    genre: "electronic",
    year: 1997,
    popularity: 87,
    duration: "7:08",
    emoji: "🌍",
    features: {
      energy: 92,
      danceability: 88
    }
  },
  {
    id: 8,
    title: "God's Plan",
    artist: "Drake",
    album: "Scorpion",
    genre: "hiphop",
    year: 2018,
    popularity: 94,
    duration: "3:18",
    emoji: "📿",
    features: {
      energy: 82,
      danceability: 80
    }
  },
  {
    id: 9,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷",
    genre: "pop",
    year: 2017,
    popularity: 93,
    duration: "3:53",
    emoji: "💖",
    features: {
      energy: 80,
      danceability: 88
    }
  },
  {
    id: 10,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    genre: "pop",
    year: 2014,
    popularity: 96,
    duration: "4:30",
    emoji: "🎩",
    features: {
      energy: 90,
      danceability: 95
    }
  },
  {
    id: 11,
    title: "Take on Me",
    artist: "a-ha",
    album: "Hunting High and Low",
    genre: "pop",
    year: 1985,
    popularity: 89,
    duration: "3:47",
    emoji: "✏️",
    features: {
      energy: 85,
      danceability: 75
    }
  },
  {
    id: 12,
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    album: "Appetite for Destruction",
    genre: "rock",
    year: 1987,
    popularity: 94,
    duration: "5:56",
    emoji: "🌹",
    features: {
      energy: 88,
      danceability: 60
    }
  }
]

export const getRecommendations = (searchTerm, genre) => {
  let filtered = musicData

  if (searchTerm) {
    const term = searchTerm.toLowerCase()
    filtered = filtered.filter(music => 
      music.title.toLowerCase().includes(term) ||
      music.artist.toLowerCase().includes(term) ||
      music.album.toLowerCase().includes(term)
    )
  }

  if (genre !== 'all') {
    filtered = filtered.filter(music => music.genre === genre)
  }

  return filtered.sort((a, b) => b.popularity - a.popularity)
}