'use strict';

var
  colors = ['neutral', 'primary', 'secondary', 'tertiary', 'positive', 'negative', 'warning', 'info', 'light', 'dark'],
  sizes = ['small', 'big']
  ;

Vue.component('quasar-button', {
  template: '<div class="quasar-button non-selectable"><slot></slot></div>',
  compiled: function() {
    var
      el = $(this.$el),
      manager = el.getAttributesManager()
      ;

    manager
    .withEmpty(colors, function(color) {
      el.addClass(color);
    })
    .withEmpty(sizes, function(size) {
      el.addClass(size);
    })
    .withEmpty('uppercase', function() {
      el.addClass('uppercase');
    });

    _.forEach(['circular', 'raised', 'disabled', 'inverted', 'cornered', 'fluid'], function(type) {
      manager.withEmpty(type, function() {
        el.addClass(type);
      });
    });
  }
});
