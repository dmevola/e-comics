const db = require('../config/connection');
const { Item } = require('../models');

const itemData = require('./itemData.json');

db.once('open', async () => {
  // clean database
  await Item.deleteMany({});

  // bulk create each model
  const item = await Item.insertMany(itemData);

  console.log('all done!');
  process.exit(0);
});
