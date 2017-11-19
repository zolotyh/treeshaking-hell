module.exports = function(content) {
  return content.replace(/\/\*\* @class \*\//g, '\n /*#__PURE__*/ \n');
};
