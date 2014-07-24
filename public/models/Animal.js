Animal = Backbone.Model.extend({
  defaults: {
      legs: 4,
      voice: null,
      name: null,
      rabid: false,
      lives: 1,
      done: false
  },
  urlRoot: '/animal/',
  idAttribute: '_id',
  setLives: function(lives){
    this.set({
      lives: lives
    });
  }
});