const User = require('./Users');

async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    return res.redirect('/users');
  } catch (error) {
    console.log('Error while registering!', error);
    res.status(500).send("Error registering user!");
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.render('index', { users });
  } catch (error) {
    console.log('Error fetching users!', error);
    res.status(500).send("Error fetching users!");
  }
}

module.exports = { register, getUsers };
