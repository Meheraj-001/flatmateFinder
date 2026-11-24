import { type Request, type Response } from 'express';

async function registerUser(req: Request, res: Response) {
    console.log('user register controller called');
    res.status(200).json({ message: 'User registered successfully' });
} 

export { registerUser };