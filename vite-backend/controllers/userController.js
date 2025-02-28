const {User: UserModel, User } = require("../models/User")

const userController = {
    create: async(req, res) => {
        try {
            const user = {
                name: req.body.name,
                idade: req.body.idade,
            }

            const response = await UserModel.create(user)
            res.status(201).json({response, msg:"U"})
        } catch (error) {
            console.log(error)
        }
    },

    find: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            res.json(user);
        } catch (err) {
           res.status(500).json({ message: err.message });
        }
    },

    readAll: async(req, res) => {
        let results = await UserModel.find({})
        res.send(results).status(200)
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id
            const results = await UserModel.deleteOne({_id: id})
            //res.send(results).status(200)
            res.status(200)
        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id
            const { name } = req.body; // Pega o nome do corpo da requisição

            const user = await User.findByIdAndUpdate(id, { name: name }, { new: true });

            res.send(user).status(200)
        } catch (err) {
            console.log(err)
        }
    },
}

module.exports = userController;