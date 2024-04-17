import Service from '@ember/service';

export default class ElementService extends Service {
  waitForElement(id) {
    return new Promise((resolve) => {
      if (document.getElementById(id)) {
        return resolve(document.getElementById(id));
      }

      const observer = new MutationObserver(() => {
        if (document.getElementById(id)) {
          resolve(document.getElementById(id));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);

    if (!(style.sheet || {}).insertRule) (style.styleSheet || style.sheet).addRule(name, rules);
    else style.sheet.insertRule(name + '{' + rules + '}', 0);
  }
}
