console.log("Drinnen - controller")


module.exports = {
  checkForm: async (req, res) => {
    try {
        // console.log(req)

        const name = req.body.name
        const email = req.body.email
        const superHero = req.body.superheroAlias    
        
        console.log(name)
        console.log(email)
        console.log(superHero)      
   
    } catch (err) {
      console.log("An Error...")
      console.log(err);
    }
  },

 initialize: (req, res) => {
    res.render("index.html");
  },
};