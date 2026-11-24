import express,{type Router, type Request, type Response} from 'express';
import { registerUser } from '../Controller/UserController';
const UserRouter= express.Router();
UserRouter.post('/register', registerUser);
export default UserRouter;