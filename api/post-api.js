const postData = require('../postDb');
const userData = require('../userDb');
const Post = require(`../models/post`);




getPostById = (id, callback) => {
    setTimeout(() => {
        let retrievedPost = null;
        for (user of postData) {
            if (user.id == id) {
                retrievedPost = user;
            }
        }
        callback(retrievedPost);
    }, 2500);

};

const addPost = (title, body, posterID, time, cb) => {
    let id = postData.length
    let newPost = new Post(++id, title, body, posterID, time)
    postData.push(newPost);
    cb(postData);
}


const deletePostById = (id, callback) => {
    setTimeout(() => {
        getPostById(id, function(post){
            post = null;
            callback(post)});
        
    }, 250);
}

const getAllPosts = (callback) => setTimeout(() => callback(postData), 250);


// const gitPosterId = (posterID, callback) => {
//     // if (!posterID) throw Error(`No post was posted by this person`);
//     const post = postData.filter(post => post.posterID === posterID);

//     callback(post);
// }

module.exports = {
    getPostById,
    // gitPosterId,
    addPost,
    deletePostById,
    getAllPosts
};