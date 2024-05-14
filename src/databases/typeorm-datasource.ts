import "reflect-metadata";
import { DataSource } from "typeorm";
import { Student } from "../models/typeorm/Student";
import { Course } from "../models/typeorm/Course";
import dotenv from "dotenv";
dotenv.config();

const SQL_HOST: string = process.env.SQL_HOST as string;
const SQL_USER: string = process.env.SQL_USER as string;
const SQL_PASSWORD: string = process.env.SQL_PASSWORD as string;
const SQL_DATABASE: string = process.env.SQL_DATABASE as string;
const SQL_PORT: number = process.env.SQL_PORT as unknown as number;

export const AppDataSource = new DataSource({
  host: SQL_HOST,
  username: SQL_USER,
  password: SQL_PASSWORD,
  database: SQL_DATABASE,
  port: SQL_PORT,
  type: "mysql",
  synchronize: true,
  logging: false,
  entities: [Student, Course], // TODO
  migrations: [], // TODO
  subscribers: [], // TODO
});