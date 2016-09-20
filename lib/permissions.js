/**
 * Created by Administrator on 2016/9/13.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}