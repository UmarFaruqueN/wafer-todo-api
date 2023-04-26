import { sequelize } from "../instances/pg";
import { Model, DataTypes } from "sequelize";

export interface TodoInstance extends Model {
     id: number;
     title: string;
     data: string;
     done: boolean;
}

export const Todo = sequelize.define<TodoInstance>(
     "Todo",
     {
          id: {
               primaryKey: true,
               autoIncrement: true,
               type: DataTypes.INTEGER,
          },
          title: {
               type: DataTypes.STRING,
          },
          data: {
               type: DataTypes.STRING,
          },
          done: {
               type: DataTypes.BOOLEAN,
               defaultValue: false,
          },
     },
     {
          tableName: "todo",
          timestamps: false,
     }
);
