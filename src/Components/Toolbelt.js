// todo
Toolbelt => ({
  CssFriendlyString = function (StringArgument) {
    var localString = StringArgument;
    var replaceAll = function (string_argument, target, replacement) {
      return string_argument.split(target).join(replacement);
    }
    localString = String(string_argument);
    localString = replaceAll(localString,' ','_');
    localString = replaceAll(localString,'.','_');
    localString = replaceAll(localString,',','_');
    localString = replaceAll(localString,'-','_')  ;
    localString.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '_');
    return localString;
  },
});

export default Toolbelt;