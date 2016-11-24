var screenshot = require('screenshot-desktop');

module.exports = function(RED) {
  function ScreenshotNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function(msg) {
      screenshot().then((img) => {
          msg.payload = img.toString('base64');
          node.send(msg);
      }).catch((err) => {
          node.warn(err);
      });
    });
  }
  RED.nodes.registerType("screenshot-node", ScreenshotNode);
};
