import { Router } from 'express';
import { IMetaData } from "IMetaData";
import MainClass from "../classes/mainClass";

const index: Router = Router();

const mainClass: MainClass = new MainClass();


index.get('/', function(req, res, next) {
  let metaData: IMetaData = {
      title: mainClass.getTitle(),
      description: "My awesome project",
      keywords: "express, typescript, is, awesome"
  };

  res.render('index', metaData);
});

export default index;
