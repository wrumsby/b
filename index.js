define(['king-dom'], function (king) {
  'use strict';

  return function (selector) {
    var el = king(selector)[0];

    el.style.backgroundColor = 'blue';
  };
});
