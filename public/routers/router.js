AK.routers.workspace = Backbone.Router.extend({
  routes: {
    '': 'render',
    'animal/:id': 'viewAnimal',
    'close': 'closeDetails'
  },
  initialize: function () {
    AK.collection.animals = new AK.collection.Animals();
    AK.view.main = new AK.view.Main();
    AK.view.createdAnimals = new AK.view.CreatedAnimals();
    AK.view.details = new AK.view.Details();
  },

  render: function () {
    AK.view.main.render();
    AK.view.createdAnimals.render();
  },

  viewAnimal: function (id) {
    AK.view.details.render(id);
  },

  closeDetails: function () {
    AK.view.details.close();
  }
});

$(document).ready(function () {
  AK.router = new AK.routers.workspace();
  Backbone.history.start();
});
