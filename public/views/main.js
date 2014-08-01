AK.view.Main = Backbone.View.extend({
  el: '#main',

  events: {
    'submit form': 'onFormSubmit',
    'keyup input[name="type"]': 'onTypeChange',
    'change input[name="rabid"]': 'onRabid'
  },
  
  render: function () {
    var html = nunjucks.render('main');
    this.$el.html(html);
    $('button').text(this.submitMsg);
    return this;
  },

  reset: function () {
    $('input[type="text"]').val('');
    $('input[type="checkbox"]').attr('checked', false);
    this.submitMsg = 'Let there be';
  },

  submitMsg: 'Let there be',
  checked: false,

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
    
    //reset our defaults if the form left them blank
    if (formData.lives === ''){
      formData.lives = 1;
    }
  
    if (formData.legs === ''){
      formData.legs = 4;
    }
    
    //create a new animal
    var newAnimal = new AK.model.Animal();
    newAnimal.save(formData, {
      success: function (model, response, options) {
        model.attributes._id = model.attributes.id;
        bootstrap.animals.push(model.attributes);
        me.reset();
        Backbone.history.loadUrl('');
      }
    });
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