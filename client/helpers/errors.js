/**
 * Created by Administrator on 2016/9/13.
 */
// Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message})
}