const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

// @route  POST api/posts
// @desc   Create a post
// @access Private
router.post('/', async (req, res) => {
  try {
    const { title, description, section } = req.body;
    console.log(req.body);
    const newPost = new Post({
      title: title,
      description: description,
      section: section,
    });

    newPost.save();

    res.json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/posts
// @desc   Get all posts
// @access Private

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });

    if (!posts.length) {
      return res.status(400).json({ msg: 'There is no posts at the moment' });
    }

    return res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
