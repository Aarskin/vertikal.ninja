(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'vertikal.ninja',
      template: '<h1>[APP] Hello Worlds!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
