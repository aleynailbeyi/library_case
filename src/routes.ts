import { body, param } from "express-validator"
import { BookController } from "./controller/BookController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
    validation: []
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
    validation: [
        param('id').isInt(),
    ]
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
    validation: [
        body('name').isString(),
    ]
}, {
    method: "get",
    route: "books",
    controller: BookController,
    action: "all",
    validation: []
}, {
    method: "get",
    route: "/books/:id",
    controller: BookController,
    action: "one",
    validation: [
        param('id').isInt(),
    ]
}, {
    method: "post",
    route: "books",
    controller: BookController,
    action: "save",
    validation: [
        body('name').isString(),
    ]
}, {
    method: "post",
    route: "/users/:id/borrow/:id",
    controller: BookController,
    action: "one",
    validation: []
}, {
    method: "post",
    route: "/users/:id/borrow/:id",
    controller: BookController,
    action: "one",
    validation: []
}]