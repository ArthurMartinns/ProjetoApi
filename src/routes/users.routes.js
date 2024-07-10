const { Router } = require('express')
const userRouter = Router();

userRouter.post("/", (request, response) => {
    const {name, password, email} = request.body

    response.send(`
        O usuário ${name}
        A senha: ${password}
        email: ${email}`);
})

module.exports = userRouter;  