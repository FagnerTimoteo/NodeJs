const Aluno = require("../models/Aluno");
const Disciplina = require("../models/Disciplina");
const Matricula = require("../models/Matricula");

const matriculaController = {
  create: async (req, res) => {
    try {      
      const { alunoId, disciplinaId } = req.body;

      const alunoExiste = await Aluno.findById(alunoId);
      if (!alunoExiste) {
        return res.status(404).json({ msg: "Aluno não encontrado!" });
      }

      const disciplinaExiste = await Disciplina.findById(disciplinaId);
      if (!disciplinaExiste) {
        return res.status(404).json({ msg: "Disciplina não encontrada!" });
      }

      const matricula = await Matricula.create({
        alunoId,
        disciplinaId
      });

      res.status(201).json({ matricula: matricula, msg: "Aluno matriculado à disciplina com sucesso!" });
  
    } catch (error) {
      console.log("Erro:", error);
      res.status(500).json({ msg: "Algo deu errado!" });
    }
  },

  readAll: async (req, res) => {
    const results = await Matricula.find({});
    res.status(200).json(results);
  },

  readAllByAlunoId: async (req, res) => {
    const alunoId = req.params.id;

    const results = await Matricula.find({ alunoId })
    res.status(200).json(results);
  },

  delete: async (req, res) => {
    try {
        const id = req.params.id;
        await Matricula.deleteOne({ _id: id });
        res.status(200).json({ message: "Relação de Aluno e Disciplina deletada com sucesso!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao deletar relação de Aluno e Disciplina" });
    }
  }  
};

module.exports = matriculaController;