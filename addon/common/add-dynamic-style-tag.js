export function createClass(name, rules) {
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);

  if (!(style.sheet || {}).insertRule) (style.styleSheet || style.sheet).addRule(name, rules);
  else style.sheet.insertRule(name + '{' + rules + '}', 0);
}
