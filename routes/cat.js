var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
request('https://api.giphy.com/v1/gifs/random?api_key=mEgdW7JqkKuiTX3V7N7koAteLm5ef5yX', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})
module.exports = router;