AK.view.Main = Backbone.View.extend({
  el: '#main',
  reset: function () {
    $('input[type="text"]').val('');
    $('input[type="checkbox"]').attr('checked', false);
    this.submitMsg = 'Let there be';
  },

  submitMsg: 'Let there be',
  checked: false,

  events: {
    'submit form': 'onFormSubmit',
    'keyup input[name="type"]': 'onTypeChange',
    'change input[name="rabid"]': 'onRabid'
  },

  onRabid: function () {
    this.checked = !this.checked;
    if (this.checked) {
      this.submitMsg += ', and let it be rabid!';
    }
    else {
      this.submitMsg = this.submitMsg.replace(', and let it be rabid!', '');
    }
    $('button').text(this.submitMsg);
  },

  onTypeChange: function (e) {
    this.submitMsg = 'Let there be ' + this.$(e.target).val();
    $('button').text(this.submitMsg);
  },

  onFormSubmit: function (e) {
    var me = this;
    e.preventDefault();
    var formData = this.serializeObject($(e.currentTarget));
    formData.rabid = formData.rabid ? true : false;
    //create a new animal
    var newAnimal = new AK.model.Animal();
    newAnimal.attributes = formData;
    newAnimal.save(null, {
      success: function (model, response, options) {
        model.attributes._id = model.attributes.id;
        bootstrap.animals.push(model.attributes);
        me.reset();
        Backbone.history.loadUrl('');
      }
    });
  },

  render: function () {
    var html = nunjucks.render('main');
    this.$el.html(html);
    $('button').text(this.submitMsg);
    return this;
  },

  serializeObject: function (target) {
    var o = {};
    var a = target.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      }
      else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  }
});

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
