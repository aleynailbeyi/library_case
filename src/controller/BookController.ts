import { NextFunction, Request, Response } from "express"
import { Book } from "../entity/Book"
import { MyDataSource } from '../data-source'

export class BookController {

   //private userRepository = getRepository(User)
   private bookRepository = MyDataSource.getRepository(Book)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.bookRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.bookRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.bookRepository.save(request.body)
    }

}