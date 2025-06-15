const express = require('express');
const Student = require('../models/Student');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Create Student
router.post('/', authenticate, authorizeAdmin, async (req, res) => {
  const { name, age, grade } = req.body;
  const student = new Student({ name, age, grade });
  try {
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: 'Error creating student', error: err });
  }
});

// Get all Students with Pagination
router.get('/', authenticate, async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default to page 1 and 10 students per page

  try {
    // Fetch students for the given page
    const students = await Student.find()
      .skip((page - 1) * limit)  // Skip previous pages' students
      .limit(parseInt(limit));   // Limit the number of students to be fetched

    // Get total number of students in the database
    const totalStudents = await Student.countDocuments();

    // Prepare the response with pagination info
    res.json({
      students,               // List of students for the current page
      totalStudents,          // Total number of students in the database
      totalPages: Math.ceil(totalStudents / limit),  // Calculate total pages
      currentPage: parseInt(page)  // Current page requested
    });
  } catch (err) {
    res.status(400).json({ message: 'Error fetching students', error: err });
  }
});

// Update Student
router.put('/:id', authenticate, authorizeAdmin, async (req, res) => {
  const { name, age, grade } = req.body;
  try {
    // Check if student exists
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    // Update student details
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, age, grade }, { new: true });
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: 'Error updating student', error: err });
  }
});


router.delete('/:id', authenticate, authorizeAdmin, async (req, res) => {
  try {
 
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting student', error: err });
  }
});

module.exports = router;
