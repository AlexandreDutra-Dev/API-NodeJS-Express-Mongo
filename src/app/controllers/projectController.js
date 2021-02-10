const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require ('../models/project');
const Task = require('../models/task');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();

    return res.send({projects});

    }catch(err) {
      return res.send(400).send({error: 'Erro ao carregar projeto'});
    }
});

router.get('/:projectId', async (req, res) => {
  res.send({user:req.userId});
});

router.post('/', async(req, res) => {
  try {
    const projects = await Project.createProject(req.body);

    return res.send({projects});

    }catch(err) {
      return res.send(400).send({error: 'Erro ao criar novo projeto'});
    }
  
});

router.put('/:projectId', async (req, res) => {
  res.send({user:req.userId});
});

router.delete('/:projectId', async (req, res) => {
  res.send({user:req.userId});
});

 
module.exports = app => app.use('/projects', router);   