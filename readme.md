# dls_frontend_write_rest_api

## Contributors

- Morten Bendeke
- Betül Iskender
- Yelong Hartl-He
- Zack Ottesen

## General Use

This is the write REST API for our Frontend application.<br>
It takes entities that has to be created or modified in the MSSQL Write-DB.<br>
It is connected to a RabbitMQ queue whenever new entites or changes to existing entities occur, so that the new/updated entities are reflected in the read-only DB<br>.
The repo is divided into folders with the respective responsibilities within the app folder:

- DB: Contains code and connection information for the MSSQL server.
- RabbitMQ: Contains code and connection information for the RabbitMQ.
- Routes: Contains endpoints that the API consists of.

## Environment Variables

Create a .env in the root folder.

PORT=3000
DB_USER=SA
DB_PASSWORD=YourStrongPassword123
DB_SERVER=localhost
WRITE_DB=writedb
RABBITUSER=user
RABBITPW=password
RABBITURL=localhost
WRITE_DB_SERVER_PORT=1433
CORS_ORIGIN=http://localhost:8080


## How To Run

Make sure the environment variables are set.<br>
Run npm i to install dependencies.<br>
Lastly, use the following command:

```bash
npm start
```

## Dependencies

Dependencies are documented in the package.json file located in the root folder.
