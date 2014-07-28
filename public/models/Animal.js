AK.model.Animal = Backbone.Model.extend({
  defaults: {
    legs: 4,
    rabid: false,
    lives: 1
  },
  urlRoot: '/animal/',
  id: '_id',
  setLives: function (lives) {
    this.set({
      lives: lives
    });
  }
});

AK.collection.Animals = Backbone.Collection.extend({
  model: AK.model.Animal,
  url: '/animals'
});
