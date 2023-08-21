import express from 'express';

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

export {
    planetsRouter
}