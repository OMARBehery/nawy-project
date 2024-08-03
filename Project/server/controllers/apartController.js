const Apart = require("../models/Apart");


module.exports.list_get = (req, res) => {

  Apart.find().sort({ createdAt: -1 })
    .then(result => {
      console.log(result);
      res.json({result})
      // res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
}



module.exports.apartid_get = (req, res) => {
  const id = req.params.id;
  Apart.findById(id)
    .then(result => {
      console.log(result);
      res.json({result})
      // res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
}





module.exports.apart_post = (req, res) => {

  console.log(req.body);
  const apart = new Apart(req.body);
  apart.save()
    .then(result => {
      // res.redirect('/apart-list');
        res.json({result})
    })
    .catch(err => {
      console.log(err);
    });


}