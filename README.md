# GitHub JWT API

A simple Express.js API that generates GitHub App JWT tokens for authentication.

## Features

- Generates GitHub App JWT tokens with RS256 algorithm
- Configurable token expiration (default: 10 minutes)
- Environment-based configuration
- Simple REST endpoint

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
GITHUB_APP_ID=your_github_app_id
GITHUB_PRIVATE_KEY=your_github_private_key
PORT=3000
```

### Getting GitHub App Credentials

1. Go to your GitHub organization settings
2. Navigate to Developer settings > GitHub Apps
3. Create a new GitHub App or select an existing one
4. Copy the App ID and download the private key

## Usage

### Start the server

```bash
npm start
```

### Development mode (with auto-restart)

```bash
npm run dev
```

The API will be available at `http://localhost:3000/jwt`

### Generate a JWT token

```bash
curl http://localhost:3000/jwt
```

Response:
```json
{
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_at": "2024-01-01T12:10:00.000Z"
}
```

## API Endpoints

### GET /jwt

Generates a GitHub App JWT token.

**Response:**
- `200 OK`: Returns the JWT token and expiration time
- `500 Internal Server Error`: If JWT generation fails

## Dependencies

- `express`: Web framework
- `jsonwebtoken`: JWT token generation
- `dotenv`: Environment variable management

### Dev Dependencies

- `nodemon`: Auto-restart server during development

## License

MIT 