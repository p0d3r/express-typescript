import { Router } from 'express';
import {IUsers} from "IUsers";


const users:Router = Router();

/* GET users listing. */
users.get('/', function(req, res, next) {
  let users: IUsers = [{
      id: 1,
      username: 'user1',
      isActive: true
  }, {
      id: 2,
      username: 'user2',
      isActive: false
  }];


  res.send(JSON.stringify(users));
});

export default users;
