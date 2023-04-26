import { Request, Response } from "express";

import { Todo } from "../models/Todo";

export const all = async (req: Request, res: Response) => {
     try {
          // sequelize using find all and sending the response res.json
          const list = await Todo.findAll();
          if (list) {
               res.json(list);
          }
     } catch (error) {
          res.status(502).json({ error });
     }
};

export const add = async (req: Request, res: Response) => {
     try {
          console.log("body", req.body);
          // checking whether the body of the request request{body} was sent
          if (req.body.title && req.body.data) {
               // if it checked that the body of the request was sent title: ,data: and done: it does the insertion
               let newTodo = await Todo.create({
                    title: req.body.title,
                    data: req.body.data,
                    done: req.body.done,
               });
               if (newTodo) {
                    const list = await Todo.findAll();
                    if (list) {
                         //sending the response that it was added to the database with the response 201 created.
                         res.status(201).json(list);
                    }
               }
          }
     } catch (error) {
          res.status(502).json({ error });
     }
};

export const update = async (req: Request, res: Response) => {
     try {
          console.log(req.body);
          let id: string = req.body.id;

          // adding in the variable the id that we send via params(id) and if it exists
          let todo = await Todo.findByPk(id);
          if (todo) {
               if (req.body.title.toLowerCase()) {
                    todo.title = req.body.title;
               }
               if (req.body.data.toLowerCase()) {
                    todo.data = req.body.data;
               }
               if (req.body.done) {
                    todo.done = req.body.done;
               }
               await todo.save();
               const list = await Todo.findAll();
               if (list) {
                    res.status(200).json(list);
               }
          } else {
               res.json({ error: "item not found" });
          }
     } catch (error) {
          res.status(502).json({ error });
     }
};

export const del = async (req: Request, res: Response) => {
     try {
          let todo = await Todo.findByPk(req.body.id);
          if (todo) {
               await todo.destroy();
               const list = await Todo.findAll();
               if (list) {
                    res.status(200).json(list);
               }
          } else {
               res.json({ message: "No todo found" });
          }
     } catch (error) {
          console.log(error);
          res.status(502).json({ error });
     }
};
