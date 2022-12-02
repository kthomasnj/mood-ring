const db = require('../config/connection');
const { User, Music } = require('../models');
const userSeeds = require('./userSeeds.json');
const musicSeeds = require('./musicSeeds.json');

db.once('open', async () => {
  try {
    await Music.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Music.create(musicSeeds);

    // for (let i = 0; i < musicSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Music.create(musicSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
