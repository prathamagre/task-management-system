import Task from '../models/Task.js';

// create task
export const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            ...req.body,
            createdBy: req.user.id
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get tasks
export const getTasks = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    try {
        const tasks = await Task.find({ assignedTo: req.user.id })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await Task.countDocuments({ assignedTo: req.user.id });

        res.json({
            tasks,
            total,
            page,
            pages: Math.ceil(total / limit)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
};

//get single task
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update task
export const updateTask = async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};