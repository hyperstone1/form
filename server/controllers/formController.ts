// const fs = require("fs");
import fs from "fs";
import path from "path";
// const path = require("path");
import { Request, Response } from "express";
import { FoundedItem } from "../utils/types";

class FormController {
  activeRequest: Request | null;
  constructor() {
    this.activeRequest = null;
  }
  checkEmail = (req: Request, res: Response) => {
    const { email, number } = req.body;

    if (this.activeRequest) {
      this.activeRequest.destroy();
    }

    this.activeRequest = req;

    const filePath = path.join(__dirname, "../", "data.json");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Ошибка чтения файла:", err);
        return;
      }
      // Преобразование строки JSON в объект JavaScript
      try {
        let jsonObject: FoundedItem[] = JSON.parse(data);
        let jsonData: FoundedItem[] = [];
        if (!number) {
          jsonData = jsonObject.filter(
            (item: FoundedItem) => item.email === email
          );
        } else {
          const replacedNumb = number.replace(/-/g, "");
          jsonData = jsonObject.filter(
            (item: FoundedItem) =>
              item.email === email && item.number === replacedNumb
          );
        }
        console.log(JSON.parse(data));
        console.log("jsonObject: ", jsonData);
        setTimeout(() => {
          res.json(jsonData);
          this.activeRequest = null;
        }, 5000);
      } catch (err) {
        console.error("Ошибка парсинга JSON:", err);
        res.json(err);
        this.activeRequest = null;
      }

      // Вывод объекта на консоль
    });
  };
}

// module.exports = new FormController();
export default new FormController();
