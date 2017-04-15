module.exports = function modelToRoutes([path, Model]) {
  /* GET all */
  this.router.get(`/${path}`, (req, res) => {
    Model.find({}, (err, models) => {
      if (err) res.status(500).send(err);
      res.status(200).json(models);
    });
  });
  /* GET one */
  this.router.get(`/${path}/:id`, (req, res) => {
    Model.findById(req.params.id, (err, model) => {
      if (err) res.status(500).send(err);
      res.status(200).json(model);
    });
  });
  /* UPDATE one */
  this.router.put(`/${path}/:id`, (req, res) => {
    Model.findById(req.params.id, (err, model) => {
      if (err) res.status(500).send(err);
      Object.assign(model, req.body);
      model.save((error) => {
        if (error) res.status(500).send(error);
        res.status(201).json({
          message: 'Updated successfully',
        });
      });
    });
  });

  /* DELETE one */
  this.router.delete(`/${path}/:id`, (req, res) => {
    Model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) res.status(500).send(err);
      res.status(201).json({
        message: 'Deleted successfully',
      });
    });
  });

  /* Create new */
  this.router.post(`/${path}`, (req, res) => {
    const model = new Model(req.body);
    model.save((error) => {
      if (error) res.status(500).send(error);
      res.status(201).json({
        message: 'Created successfully',
      });
    });
  });
};
