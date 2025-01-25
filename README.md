## Setup Instruction and Running The Application Steps 
This project uses Node.js (22.10.2 ver) with Express (5.0.0 ver).
```bash
npm i
npm run build
npm start
```
All the required packages will be installed using this command `npm i`. \
Always build first using `npm run build` and start the server using `npm start`, whenever changes done in code.


## API Endpoints List
- Clone the github repository
- Pip install all the given requirements as provided in the installation part.
- The database used is PostgreSQL.
- Hit the APIs given in Postman collection. (Postman Link: `https://app.getpostman.com/join-team?invite_code=f44ae8276ff6c77b0075dd13b09a1efc758697862fd27f1e956369f8dc0faef1` )
- After registeration and login, provide the JWT token to bearer authentication in Postman. Only after that, other APIs will be accessible.
- To start the server, use command: `npm start` \
  Hit the API's (in Postman or Thunderclient) in this order: 
- 𝗣𝗢𝗦𝗧 `https://imf-gadget-fqkc.onrender.com/api/register`\
  Sample input:
  ```bash
    {
      "email": "dd@example.com",
      "password": "1234dd"
    }
  ```
  Description: Registers a new user. Credentials are securely stored.
- POST `https://imf-gadget-fqkc.onrender.com/api/login` \
  Sample input: 
  ```bash
    {
      "email": "dd@example.com",
      "password": "1234dd"
    }
  ```
  Description: Authenticates the user and provides a JWT token.
- POST `https://imf-gadget-fqkc.onrender.com/api/gadgets` \
  Sample input:
  ```bash
    {
      "name": "Gadget DD"
    }
  ```
  Description: Creates a new gadget with the randomly generated codename. Default status is Available.
- PATCH `https://imf-gadget-fqkc.onrender.com/api/gadgets/:id` \
  Sample input: 
  ```bash
    Path Variable: id (eg. any UUID)
    {
      "name": "The Nightingale",
      "status": "Deployed"
    }
  ```
  Description: Updates gadget details based on the provided ID.
- DELETE `https://imf-gadget-fqkc.onrender.com/api/gadgets/:id` \
  Sample input:
  ```bash
    Path Variable: id (eg. any UUID)
  ```
  Description: Status of the gadget associated with the given ID is changed to Decommissioned and timestamp for decommissioning is recorded.
- POST `https://imf-gadget-fqkc.onrender.com/api/gadgets/:id/self-destruct` \
  Sample input:
  ```bash
    Path Variable: id (eg. any UUID)
  ```
  Description: Confirmation code is accessed and self-destruction of gadget is triggered.
- GET `https://imf-gadget-fqkc.onrender.com/api/gadgets` \
  Sample input: No input needed.
  Description: Fetches all gadgets details with randomly generated "mission success probability" percentage for each gadget.
- 𝗚𝗘𝗧 `https://imf-gadget-fqkc.onrender.com/api/gadgets?status` \
  Sample input:
  ```bash
    query params: status
  ```
  Description: Fetches all gadgets details filter by status (Available, Deployed, Destroyed, Decommissioned).

## Deployment
- The backend project is deployed on Render (free instance; inactivity may cause ~50-second delay).
- Deployed URL: `https://imf-gadget-fqkc.onrender.com/api`
- You can directly hit the APIs using the deployed URL without starting the local server.
