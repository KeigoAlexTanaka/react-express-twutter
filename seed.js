const { Post } = require('./models');

const seed = async () => {
  try {
    const posts = await Post.bulkCreate([
      {
        'user': 'layne',
        'content': 'soleil is super cool!',
        'retweets': 5
      },
      {
        'user': 'coolstudent',
        'content': 'what is sequelize anyway haha rip',
        'retweets': 7
      },
      {
        'user': 'mishelle',
        'content': 'please help me i am trapped in a computer',
        'retweets': 101011
      },
      {
        'user': 'ruhroh',
        'content': 'had way 2 much fun at happy hour...oops',
        'retweets': 311
      },
      {
        'user': 'lady preserves',
        'content': 'how do i caption this photo of my marmalade',
        'retweets': 2001
      }
    ]);
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

seed();
