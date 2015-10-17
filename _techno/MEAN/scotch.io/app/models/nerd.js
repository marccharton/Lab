//
// @filename app/models/nerd.js
// @project scotch-io--starter-node-angular
// @date_creation 04/10/2015
// @date_modification 04/10/2015
// @author kram47<kramoogle@gmail.com>
//

// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});