const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { nombre, email } = req.body;
  try {
    await pool.query('INSERT INTO public.usuarios(nombre, email) VALUES($1, $2)', [nombre, email]);
    res.status(201).json({ message: 'Usuario guardado exitosamente' });
  } catch (err) {
    console.error('Error en INSERT:', err);
    res.status(500).json({ message: 'Error al guardar usuario', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

module.exports = router;
