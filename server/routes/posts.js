const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

// @route  POST /posts
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

// @route  GET /posts
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

// @route  DELETE /posts/:post_id
// @desc   DELETE a specific post
// @access Private
router.delete('/:post_id', async (req, res) => {
  try {

    const post = await Post.findByIdAndDelete(req.params.post_id);

    if(!post){
      res.status(404).json({msg: "Post is not found"});
    }
    console.log(post);
    console.log("Deleted succesfully");

    res.json(post);

  } catch (error) {
    console.error(error.message);

    if(error.kind == 'ObjectId'){
        return res.status(400).json({msg: 'Post not found'});
    }

    res.status(500).send("Server Error");
  }
});

module.exports = router;
