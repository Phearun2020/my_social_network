const Post = require('../models/post');

exports.createPost = (req, res) => {
    console.log('createPost is called');


    const text = req.body.text;
    const postedAt = new Date().toISOString();
    const postedBy = 'Phearun';
    const status = req.body.status;

    console.log('status', status);
    console.log('status', text);
    const post = new Post({
        text: text,
        postedAt: postedAt,
        postedBy: postedBy,
        status: status
    });
    post.save().then(result => {
        console.log('post is created');
        console.log('post result', result);
        res.json({"message" : "success!", "data": result});
        //res.redirect('/'); //localhost: 3000
    }).catch(err => {
        console.log(err);
    })
}