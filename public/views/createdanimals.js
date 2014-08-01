AK.view.CreatedAnimals = Backbone.View.extend({
  el: '#createdAnimals',

  render: function () {
    var html = nunjucks.render('animals', {
      data: bootstrap.animals
    });
    this.$el.html(html);
    return this;
  }
});
