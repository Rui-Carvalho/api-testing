var assert = require('assert');
var superagent = require('superagent');
var status = require('http-status');


var server = 'http://your-project.com';
 
describe('test article API', function() {

  it('articles', function(done) {

    superagent.get(server + '/xhr/articles/?attributes=short&authors=&feed=top-story&limit=5&offset=0&order=article_id&sort=DESC&source_type=syndicated').end(function(err, res) {

      assert.ifError(err);
      
      // test 200
      assert.equal(res.status, status.OK);

      // decode data
      var data = JSON.parse(res.text);

      var hasData = data.data.length > 1;
      assert.equal(hasData, true);

      // internal structure
      var hasKey = data.data[0].hasOwnProperty('article_id');
      assert.equal(hasKey, true);

      done();

    });
  });
 
});