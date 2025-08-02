const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createProject = async (req, res) => {
  const { name, company, email, contactNumber, idea } = req.body;

  if (!name || !email || !contactNumber || !idea) {
    return res.status(400).json({ error: 'Name, Email, Contact Number, and Idea are required' });
  }

  try {
    const newProject = new Project({ name, company, email, contactNumber, idea });
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
