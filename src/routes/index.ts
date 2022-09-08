import { Router } from 'express';
import { readFileSync } from 'fs';

const PATH_ROUTER = `${__dirname}`
const router = Router();

readFileSync(PATH_ROUTER).filter((fileName) => {
  console.log(fileName);
})


export {router};