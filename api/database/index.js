const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const URL = process.env.MONGOOSE_URL

const connection = mongoose.connect(URL).then(function(){
    console.log("Conexão realizada!")
})
module.exports = connection