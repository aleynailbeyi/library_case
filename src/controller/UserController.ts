import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { getRepository} from "typeorm";
import { MyDataSource } from "../data-source";

export class UserController {

   private userRepository = getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try{
            const text  = `INSERT INTO users (id, name) VALUES ($1, $2)`
            const values = [request.body.id, request.body.name]
            const result = await MyDataSource.query(text, values)
            console.log(result);
        } catch (error) {
            console.log('Error', error.message);
            return response.status(400).json({message: error.message})
        }
        return this.userRepository.save(request.body)
    }

}