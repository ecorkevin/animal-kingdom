AK.model.Animal = Backbone.Model.extend({
  defaults: {
    legs: 4,
    rabid: false,
    lives: 1
  },
  urlRoot: '/animal/'
});