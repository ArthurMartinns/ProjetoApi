const { Router } = require('express')

const UsersController = require('../controllers/UsersController');

const userRouter = Router();

function myMiddleware(request, response, next){
    if(!request.body.isAdmin) {
       return response.json({message: "user não autorizada"})
    }

    next()
}

const usersController = new UsersController();

userRouter.post("/", myMiddleware ,usersController.create)
module.exports = userRouter;  