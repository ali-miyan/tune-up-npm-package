export class BadRequestError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Bad Request Error';
    }
  }
  
  export class NotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Not Found Error';
    }
  }
  
  export class UnauthorizedError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Unauthorized Error';
    }
  }
  