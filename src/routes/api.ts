import { Router } from "express";

import * as todoController from "../controllers/todoController";

const router = Router();

// listing all tasks
router.get("/todo", todoController.all);

//Inserting a Task
router.post("/todo", todoController.add);

//edit task by id
router.put("/todo", todoController.update);

//delete any task by id;
router.delete("/todo", todoController.del);

export default router;
