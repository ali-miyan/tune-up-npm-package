# Tune-Up Library 🛠️

![npm](https://img.shields.io/npm/v/tune-up-library)
![License](https://img.shields.io/npm/l/tune-up-library)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

A robust middleware for error handling in Express applications, designed to streamline your Node.js development process.

## 🌟 Features

- 🚀 Custom error classes for common HTTP errors
- 🎯 Express middleware for centralized error handling
- 📘 Full TypeScript support
- 🔧 Easy integration with existing Express apps

## 🚀 Installation

Install the package using npm:

```bash
npm install tune-up-library
```

## 📖 Usage

### Importing

```typescript
import { 
  errorHandler, 
  BadRequestError, 
  NotFoundError, 
  UnauthorizedError 
} from 'tune-up-library';
```

### Error Handler Middleware

Add the error handler middleware to your Express application:

```typescript
import express from 'express';
import { errorHandler } from 'tune-up-library';

const app = express();

// Your routes and other middleware

app.use(errorHandler);
```

### Using Custom Error Classes

You can use the custom error classes in your route handlers or other middleware:

```typescript
import { BadRequestError, NotFoundError, UnauthorizedError } from 'tune-up-library';

app.get('/example', (req, res, next) => {
  try {
    // Your logic here
    if (someCondition) {
      throw new BadRequestError('Invalid input');
    }
    if (anotherCondition) {
      throw new NotFoundError('Resource not found');
    }
    if (yetAnotherCondition) {
      throw new UnauthorizedError('Unauthorized access');
    }
    // ...
  } catch (error) {
    next(error);
  }
});
```

## 📚 API Reference

### `errorHandler(err, req, res, next)`

Express middleware that handles errors and sends appropriate responses.

### `BadRequestError`

Custom error class for 400 Bad Request errors.

### `NotFoundError`

Custom error class for 404 Not Found errors.

### `UnauthorizedError`

Custom error class for 401 Unauthorized errors.

## 🧰 Dependencies

- express: ^4.19.2

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

If you find a bug or have a suggestion, please file an issue on the GitHub repository.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

ali

---

Made with ❤️ by ali
