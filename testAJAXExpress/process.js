app.post('/process', (req, res) => {
  const errors = {};
  const data = {};

  if (!req.body.name) {
    errors.name = 'Name is required.';
  }
  if (!req.body.email) {
    errors.email = 'Email is required.';
  }
  if (!req.body.superheroAlias) {
    errors.superheroAlias = 'Superhero alias is required.';
  }
  
  if (Object.keys(errors).length) {
    data.success = false;
    data.errors = errors;
  } else {
    data.success = true;
    data.message = 'Success!';
  }
  console.log(JSON.stringify(data));
  res.status(data.success ? 200 : 422).json(data);
});