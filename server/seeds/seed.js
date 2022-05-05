const db = require('../config/connection');
const { Item, User } = require('../models');

const userData = require('./userData.json');
const itemData = require('./itemData.json');

db.once('open', async () => {
  // clean database
  await Item.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const item = await Item.insertMany(itemData);
  const user = await User.insertMany(userData);

  console.log('all done!');
  process.exit(0);
});
