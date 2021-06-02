module.exports = {
  checkForm: async (req, res) => {
    try {
        const nameForm = req.body.nameForm
        const emailForm = req.body.email
        const superHero = req.body.superheroAlias           
        // console.log(nameForm)
        // console.log(emailForm)
        // console.log(superHero)      
        
        const errors = {};
        const data = {};
      
        if (!req.body.nameForm) {
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
        // res.status(data.success ? 200 : 422).json(data);
        res.status(200).json(data);
    } catch (err) {
      console.log("An Error...")
      console.log(err);
    }
  },

 initialize: (req, res) => {
    res.render("index.html");
  },
};