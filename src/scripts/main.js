'use strict';

function createTree(element, data) {
  // eslint-disable-next-line curly
  if (!element) return;

  const buildList = (obj) => {
    const ul = document.createElement('ul');

    Object.keys(obj).forEach((key) => {
      const li = document.createElement('li');
      // eslint-disable-next-line padding-line-between-statements
      li.textContent = key;

      const child = obj[key];

      if (child && typeof child === 'object' && Object.keys(child).length > 0) {
        li.appendChild(buildList(child));
      }

      ul.appendChild(li);
    });

    return ul;
  };

  element.innerHTML = '';
  element.appendChild(buildList(data));
}

if (typeof module !== 'undefined') {
  module.exports = { createTree };
}
