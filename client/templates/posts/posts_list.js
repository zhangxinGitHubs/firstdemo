Template.postsList.helpers({
    posts: function() {
        console.log('posts')
        return Posts.find({}, {sort: {submitted: -1}});
    },
    getresult:function () {
        return getdata.result(1,14)
    }
});