# HomelyHub

HomelyHub is a backend API server for a real estate or property listing platform. It manages user authentication, property listings, and more.

## Backend Libraries and Dependencies

The backend project is built with Node.js and relies on the following key libraries:

- **[Express](https://expressjs.com/) (`express`)**: A minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.
- **[Mongoose](https://mongoosejs.com/) (`mongoose`)**: An elegant MongoDB object modeling tool designed to work in an asynchronous environment.
- **[Dotenv](https://www.npmjs.com/package/dotenv) (`dotenv`)**: Loads environment variables from a `.env` file into `process.env`.
- **[CORS](https://www.npmjs.com/package/cors) (`cors`)**: A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **[Bcrypt](https://www.npmjs.com/package/bcrypt) (`bcrypt`)**: A library to help securely hash passwords before saving them to the database.
- **[JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) (`jsonwebtoken`)**: An implementation of JSON Web Tokens for securely transmitting information between parties as a JSON object, used for user authentication.
- **[Cookie Parser](https://www.npmjs.com/package/cookie-parser) (`cookie-parser`)**: Parse `Cookie` header and populate `req.cookies` with an object keyed by the cookie names.
- **[ImageKit](https://imagekit.io/) (`imagekit`)**: Used for processing, optimization, and delivering images.
- **[Nodemailer](https://nodemailer.com/) (`nodemailer`)**: A module for Node.js applications to allow easy and reliable email sending.
- **[Mailgen](https://www.npmjs.com/package/mailgen) (`mailgen`)**: Generates clean, responsive HTML emails for sending transaction emails like password resets or welcome messages.
- **[Slugify](https://www.npmjs.com/package/slugify) (`slugify`)**: Creates URL-friendly slugs from strings (e.g., converting "My Property Title" to "my-property-title").
- **[Validator](https://www.npmjs.com/package/validator) (`validator`)**: A library of string validators and sanitizers.

## Getting Started

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by creating a `.env` file in the `backend` directory.
4. Run the development server:
   ```bash
   npm run dev
   ```

The API will typically start on the configured port, with routes like `/api/v1/rent/user` and `/api/v1/rent/listing`.

