const mongoose = require('../../database');

const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required:true, 
  }  ,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],    
  createdAt: { 
    type: Date,
    default: Date.now,
  },

});


const Project = mongoose.model('project', ProjectSchema); 

module.exports = Project;
