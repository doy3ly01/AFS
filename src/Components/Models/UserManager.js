// models/UserManager.js
import User from './User';

class UserManager {
  constructor() {
    this.users = this.loadUsers(); // Load users from localStorage on initialization
  }

  addUser(user) {
    console.log('Adding user:', user);
    this.users.push(user);
    this.saveUsers();
  }

  findUserByEmail(email) {
    console.log('Searching for user with email:', email);
    console.log('Users in UserManager:', this.users);

    const foundUser = this.users.find((user) => user.email === email);
    console.log('Found user:', foundUser);

    return foundUser;
  }

  login(email, password) {
    const user = this.findUserByEmail(email);

    if (user && user.login(email, password)) {
      return true; // Login successful
    }

    return false; // Login failed
  }

  loadUsers() {
    try {
      const data = localStorage.getItem('users');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log('Error reading users from localStorage:', error.message);
      return [];
    }
  }

  saveUsers() {
    try {
      localStorage.setItem('users', JSON.stringify(this.users));
    } catch (error) {
      console.log('Error writing users to localStorage:', error.message);
    }
  }
}

export default UserManager;
