import Queue from '../lib/Queue'
import { Request, Response } from 'express'

class UserController {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        }

        await Queue.add({ user })

        return res.json(user);
    }
}

export const userController = new UserController;