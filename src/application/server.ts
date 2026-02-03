import express from 'express';
import path from 'path';
import * as fs from "node:fs";
import * as YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

import { errorHandler } from "./errorHandling";
import dotenv from 'dotenv';
import HerosRepositoryAdapter from "../infrastructure/adapters/HerosRepositoryAdapter";
import {HerosService} from "../domain/services/HerosService";
import {HerosController} from "../presentation/controllers/HerosController";

dotenv.config();

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:9000' }));


const file  = fs.readFileSync('src/api/Heros.yml', 'utf8');
const swaggerDocument = YAML.parse(file);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const heroesRepo = new HerosRepositoryAdapter();
const heroesService = new HerosService(heroesRepo);
const heroesController = new HerosController(heroesService);

heroesController.registerRoutes(app);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/docs`);
});
