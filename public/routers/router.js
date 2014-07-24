var Workspace = Backbone.Router.extend({
  routes: {
    'animal/:id': 'viewAnimal'
  },
  initialize: function () {
    console.log('initializing...');
  },
  viewAnimal: function (id) {
    console.log(id);
    console.log('we are here');
    var template = '_details';

    $.ajax({
      url: "/animal/" + id,
    }).done(function (data) {
      var html = nunjucks.render(template, {
        data: data
      });
      $('#details').html(html);
    });
  }
});

AnimalRouter = new Workspace();
Backbone.history.start();
