var CssFriendlyString = function (StringArgument) {
  var localString = StringArgument;
  var replaceAll = function (StringArgument, target, replacement) {
    return StringArgument.split(target).join(replacement);
  };
  localString = replaceAll(localString, ' ', '_');
  localString = replaceAll(localString, '.', '_');
  localString = replaceAll(localString, ',', '_');
  localString = replaceAll(localString, '-', '_');
  return localString;
};

export default CssFriendlyString;
