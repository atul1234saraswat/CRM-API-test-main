const db = require('../config/db');

exports.getAllSuppliers = (req, res) => {
  db.query('SELECT * FROM suppliers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getSupplierById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM suppliers WHERE supplier_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Supplier not found' });
    res.json(results[0]);
  });
};

exports.createSupplier = (req, res) => {
  const supplier = req.body;
  db.query('INSERT INTO suppliers SET ?', supplier, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Supplier created', supplier_id: result.insertId });
  });
};

exports.updateSupplier = (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  db.query('UPDATE suppliers SET ? WHERE supplier_id = ?', [updates, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Supplier updated' });
  });
};

exports.deleteSupplier = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM suppliers WHERE supplier_id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Supplier deleted' });
  });
};