// Simple in-memory authentication (replace with proper auth in production)
const users = new Map();

export const auth = {
  signup: (email, password, name) => {
    if (users.has(email)) {
      throw new Error('User already exists');
    }
    
    const user = {
      id: Date.now().toString(),
      email,
      password, // In production, hash this password
      name,
      createdAt: new Date()
    };
    
    users.set(email, user);
    return user;
  },
  
  login: (email, password) => {
    const user = users.get(email);
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    return user;
  },
  
  getUser: (email) => {
    return users.get(email);
  }
};