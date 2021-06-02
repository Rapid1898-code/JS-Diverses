module.exports = {
  checkForm: async (req, res) => {
    try {
        // console.log(req)

        const user = {
          name: req.body.name,
          email: req.body.email,
          mobile: req.body.mobile
        }
        console.log(user)
        res.send(user)
   
      } catch (err) {
        console.log("An Error...")
        console.log(err);
      }
    },

 initialize: (req, res) => {
    res.render(main.html);
  },
};