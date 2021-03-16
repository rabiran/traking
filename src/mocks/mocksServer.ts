/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import fs from 'fs';
import express from 'express';

const app = express();
const port = 3001; // default port to listen

const searchInData = (data: [Record<string, unknown>], queries: [string]): [Record<string, unknown>] => {
  let foundRecord: Record<string, unknown>[];
  for (const query of queries) {
    foundRecord = data.filter((record) => JSON.stringify(record).toLowerCase().includes(query));
    if (foundRecord.length) break;
  }
  return foundRecord;
};

app.use((req, res, next) => {
  if (req.headers.authorization === '123') {
    next();
  } else {
    throw new Error('unauthorized');
  }
});

app.get('/getAkaTelephone', (req, res) => {
  let data = fs.readFileSync('./mocksFiles/getAkaTelephone.json', 'utf8');
  data = JSON.parse(data);
  if (Object.keys(req.query).length > 0) {
    data = searchInData(data, Object.values(req.query));
  }
  res.json(data);
});

app.get('/getAkaEmployees', (req, res) => {
  let data = fs.readFileSync('./mocksFiles/getAkaEmployees.json', 'utf8');
  data = JSON.parse(data);
  if (Object.keys(req.query).length > 0) {
    data = searchInData(data, Object.values(req.query));
  }
  res.json(data);
});

app.get('/getAD/s', (req, res) => {
  let data = fs.readFileSync('./mocksFiles/AD.json', 'utf8');
  data = JSON.parse(data);
  if (Object.keys(req.query).length > 0) {
    data = searchInData(data, Object.values(req.query));
  }
  res.json(data);
});

// start the Express server
app.listen(port, () => console.log(`mocks server run on port: ${port}`));
