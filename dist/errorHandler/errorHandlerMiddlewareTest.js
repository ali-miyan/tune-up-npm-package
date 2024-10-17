const { errorHandler } = require('./errorHandlerMiddleware');
const express = require('express');
const { BadRequestError,NotFoundError,UnauthorizedError } = require('./errorHandlers');


const app = express();

app.post('/login', ()=>{
    throw new NotFoundError()
});

app.use(errorHandler);

const port = 3008;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});