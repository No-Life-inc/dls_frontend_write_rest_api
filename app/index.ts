import express from 'express';
import sql from 'mssql';
import {config} from './db/db-config';

const app = express();
const port = 3000;


// Connect to the database
sql.connect(config).then(() => {
    console.log('Connected to the database.');
  }).catch(err => {
    console.error('Error connecting to the database: ', err);
  });

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));