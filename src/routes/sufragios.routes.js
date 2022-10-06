import { Router } from "express";
import {crearSufragio,
        listarResultados
} from "../controllers/sufragios.controller.js";

export const sufragiosRouter = Router();

sufragiosRouter.get("/sufragio/:region",listarResultados);
sufragiosRouter.post("/sufragio",crearSufragio);

