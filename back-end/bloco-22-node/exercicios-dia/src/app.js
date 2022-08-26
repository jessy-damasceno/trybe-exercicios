const express = require('express');

const OK = 200;

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities/:id', (req, res) => {
  const id = Number(req.params.id);
  const activity = activities.find(e => e.id === id);

  res.status(OK).json(activity);
});

app.get('/myActivities', (_req, res) => {
  res.status(OK).json({ activities });
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;

  if (status) {
    const response = activities.filter(e => e.status === status);
    res.status(OK).json({ response });
  } else {
    res.status(404);
  }
})

module.exports = app;