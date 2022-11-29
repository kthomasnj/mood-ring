const db = require('../config/connection');
const { Music } = require('../models');

const musicData = require('./musicData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const musicFiles = await Music.insertMany(musicData);

  console.log('Music seeded!');
  process.exit(0);
});

