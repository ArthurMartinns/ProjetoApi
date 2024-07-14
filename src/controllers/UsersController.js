const AppError = require("../utils/AppError")


class UsersController {
    //MÁXIMO 5 MÉTODOS/FUNÇÕES
    create(request, response) {
        const {name, password, email} = request.body;

        if(!name) {
            throw new AppError("NOME É OBRIGATÓRIO")
        }

        response.json({name, email, password});
    }
}


module.exports = UsersController;