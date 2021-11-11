
const commentsRouter = require('express').Router();
const Comment = require('../models/comment');

commentsRouter.get('/', async (request, response) => {

  const result = await Comment.find({});

  if(result)
  {
      response.json(result.map(r => r.toJSON()));
  }
  else
      response.status(404).end();
  
});

commentsRouter.get('/:id', async (request, response) => {

  const id = request.params.id;

  const result = await Comment.find({blogId:id});

  if(result)
  {
      response.json(result);
  }
  else
      response.status(404).end();
  
});

commentsRouter.post('/', async (request, response) => {

  const body = request.body;

  console.log('requested new comment with body of ' + body)

  if(body.comment === undefined)
      return response.status(404).json({error:'comment undefined'});

  const newComment = new Comment({

      comment:body.comment,
      blogId:body.blogId

  });

  console.log('creating ocmment with ' + newComment)

  await newComment.save();

  response.json(newComment.toJSON());
});


module.exports = commentsRouter;