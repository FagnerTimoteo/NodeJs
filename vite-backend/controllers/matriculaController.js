const Aluno = require("../models/Aluno");
const Disciplina = require("../models/Disciplina");
const AlunoDisciplina = require("../models/Matricula");

const matriculaController = {
  create: async (req, res) => {
    try {      
      const { alunoId, disciplinaId } = req.body;
      console.log(alunoId)
      console.log(disciplinaId)

      const alunoExiste = await Aluno.findById(alunoId);
      if (!alunoExiste) {
        return res.status(404).json({ msg: "Aluno não encontrado!" });
      }

      const disciplinaExiste = await Disciplina.findById(disciplinaId);
      if (!disciplinaExiste) {
        return res.status(404).json({ msg: "Disciplina não encontrada!" });
      }

      const alunoDisciplina = await AlunoDisciplina.create({
        alunoId,
        disciplinaId
      });

      res.status(201).json({ alunoDisciplina, msg: "Aluno matriculado à disciplina com sucesso!" });
  
    } catch (error) {
      console.log("Erro:", error);
      res.status(500).json({ msg: "Algo deu errado!" });
    }
  },

  readAll: async (req, res) => {
    const results = await AlunoDisciplina.find({});
    res.status(200).json(results);
  },

  readAllByAlunoId: async (req, res) => {
    const alunoId = req.body.alunoId;
    console.log(alunoId)
    const results = await AlunoDisciplina.findOne({ alunoId })
    res.status(200).json(results);
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { disciplinaId } = req.body; // Removemos nota e semestre
  
      const existe = await AlunoDisciplina.findById(id);
      if (!existe) {
        return res.status(404).json({ msg: "Registro não encontrado!" });
      }
  
      const alunoDisciplina = await AlunoDisciplina.findByIdAndUpdate(
        id,
        { disciplinaId },
        { new: true } // Para retornar o objeto atualizado
      );
  
      res.status(200).json({ alunoDisciplina, msg: "AlunoDisciplina atualizado com sucesso!" });
    } catch (err) {
      console.log("Erro:", err);
      res.status(500).json({ msg: "Algo deu errado!" });
    }
  },  

  delete: async (req, res) => {
    try {
        const id = req.params.id;
        await AlunoDisciplina.deleteOne({ _id: id });
        res.status(200).json({ message: "Relação de Aluno e Disciplina deletada com sucesso!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao deletar relação de Aluno e Disciplina" });
    }
  }    
};

module.exports = matriculaController;