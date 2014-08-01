AK.view.Details = Backbone.View.extend({
  template: 'details',
  el: '#details',
  render: function (id) {
    var me = this;
    $.ajax({
      url: "/animal/" + id,
    }).done(function (data) {
      var html = nunjucks.render(me.template, {
        data: data
      });
      me.$el.html(html);
      me.$el.removeClass('hide');
    });
  },
  close: function () {
    this.$el.addClass('hide');
  }
});
