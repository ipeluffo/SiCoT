var storage = require('node-persist');
storage.initSync();

exports.getConfiguration = function () {
	return storage.getItem('configuration');
};

exports.setConfiguration = function(configuration) {
	storage.setItem('configuration', configuration);
}
