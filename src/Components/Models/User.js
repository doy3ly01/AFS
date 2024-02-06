// models/User.js

let userIdCounter = 1; //counter for users

class User {
  constructor({
    id = userIdCounter++,
    firstName = '',
    lastName = '',
    email = '',
    username = '',
    password = '',
    confirmPassword = '',
    role = ''
  } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.role = role;
  }
    
  
    login(email, password) {
      // Implement your login logic here
      // For simplicity, let's just compare the email and password
      return this.email === email && this.password === password;
    }
  
    updateProfile(newFirstName, newLastName, newEmail) {
      this.firstName = newFirstName || this.firstName;
      this.lastName = newLastName || this.lastName;
      this.email = newEmail || this.email;
      // You might want to add more validation or logic depending on your requirements
    }
  
    resetPassword(newPassword) {
      this.password = newPassword;
      // You might want to add more validation or logic depending on your requirements
    }
  }
  
  export default User;
  