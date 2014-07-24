(function () {
  (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index"] = (function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        output += "<!DOCTYPE html>\r\n<head>\r\n  <style>\r\n  body {\r\n    text-align: center;\r\n  }\r\n  </style>\r\n  <link href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n  <script src=\"./js/jquery-2.0.3.js\"></script>\r\n  <script src=\"./js/underscore-1.5.2.js\"></script>\r\n  <script src=\"./js/backbone-1.1.0.js\"></script>\r\n  <script src=\"./js/templates.js\"></script>\r\n  <script src=\"./js/nunjucks.js\"></script>\r\n  <script src=\"./models/Animal.js\"></script>\r\n  <script src=\"./routers/router.js\"></script>\r\n\r\n  <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\r\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n  <title>HTML</title>\r\n  <meta name=\"author\" content=\"Kevin\" />\r\n  <!-- Date: 2013-11-19 -->\r\n</head>\r\n<body>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <h3>THE ANIMAL CREATOR</h3>\r\n          \r\n      <form class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-6 control-label\">What kind of animal is this?</label>\r\n          <div class=\"col-sm-6\">\r\n          <input class=\"form-control\" required name=\"type\" type=\"text\" placeholder=\"Animal Type\"><br/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-6 control-label\">What should we name it?</label>\r\n          <div class=\"col-sm-6\">\r\n            <input class=\"form-control\" required name=\"name\" type=\"text\" placeholder=\"Name\"><br/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-6 control-label\">How many legs does it have?</label>\r\n          <div class=\"col-sm-6\">\r\n            <input class=\"form-control\" name=\"legs\" type=\"text\" placeholder=\"# of Legs\"><br/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-6 control-label\">What noise does it make?</label>\r\n          <div class=\"col-sm-6\">\r\n            <input class=\"form-control\" name=\"noise\" type=\"text\" placeholder=\"Noise\"><br/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-6 control-label\">How many lives does it have?</label>\r\n          <div class=\"col-sm-6\">\r\n            <input class=\"form-control\" name=\"lives\" type=\"text\" placeholder=\"# of Lives\"><br/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-6 control-label\"> Is it rabid? </label>          \r\n          <div class=\"col-sm-6\">\r\n              <input class=\"pull-right\" name=\"rabid\" type=\"checkbox\" value=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-primary\"><span id=\"animaltypespan\"></span></button>\r\n        </div>\r\n      </form>        \r\n    </div>\r\n    <div id=\"createdAnimals\" class=\"col-md-4\">\r\n    ";
        env.getTemplate("partials/_animals.html", function (t_3, t_1) {
          if (t_3) {
            cb(t_3);
            return;
          }
          t_1.render(context.getVariables(), frame.push(), function (t_4, t_2) {
            if (t_4) {
              cb(t_4);
              return;
            }
            output += t_2
            output += "\r\n    </div>\r\n  </div>\r\n</body>\r\n<script>\r\n$.fn.serializeObject = function()\r\n{\r\n    var o = {};\r\n    var a = this.serializeArray();\r\n    $.each(a, function() {\r\n        if (o[this.name] !== undefined) {\r\n            if (!o[this.name].push) {\r\n                o[this.name] = [o[this.name]];\r\n            }\r\n            o[this.name].push(this.value || '');\r\n        } else {\r\n            o[this.name] = this.value || '';\r\n        }\r\n    });\r\n    return o;\r\n};\r\n\r\n$('form').on('submit', function(e){\r\n  e.preventDefault();\r\n  var formData = $(e.currentTarget).serializeObject();\r\n  formData.rabid = formData.rabid ? true : false;\r\n  //create a new animal\r\n  var x = new Animal();\r\n  x.attributes = formData;\r\n  x.save();\r\n  $('input[type=\"text\"]').val('');\r\n  $('input[type=\"checkbox\"]').attr('checked', false);\r\n  $('button').attr('diabled', true);\r\n  $('#createdAnimals').html();\r\n});\r\n\r\nvar submitMsg = 'Let there be';\r\nvar checked = false;\r\n$('button').text(submitMsg);\r\n\r\n$('input[name=\"type\"]').keyup(function(){\r\n  submitMsg = 'Let there be ' + $(this).val();\r\n  $('button').text(submitMsg);\r\n});\r\n\r\n$('input[name=\"rabid\"]').change(function(){\r\n  checked = !checked;\r\n  if (checked){\r\n    submitMsg += ', and let it be rabid!';\r\n  } else {\r\n    submitMsg = submitMsg.replace(', and let it be rabid!', '');\r\n  }\r\n  $('button').text(submitMsg);\r\n\r\n});\r\n\r\n\r\n</script>\r\n</html>\r\n\r\n";
            cb(null, output);
          })
        });
      }
      catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  })();
})();
(function () {
  (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["_animals"] = (function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        output += "<div>\r\n  <label>Created Animals</label>\r\n  ";
        frame = frame.push();
        var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "rows", env.autoesc);
        if (t_3) {
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            output += "\r\n    <li> <a href=\"#/animal/";
            output += runtime.suppressValue(runtime.memberLookup((t_4), "id", env.autoesc), env.autoesc);
            output += "\">";
            output += runtime.suppressValue(runtime.memberLookup((t_4), "id", env.autoesc), env.autoesc);
            output += "</a>\r\n  ";;
          }
        }
        frame = frame.pop();
        output += "\r\n  \r\n  <div id=\"details\" style=\"border: 1px black solid;\">\r\n  </div>\r\n  \r\n</div>\r\n";
        cb(null, output);;
      }
      catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  })();
})();
(function () {
  (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["_details"] = (function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        output += "<li> Type: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "type", env.autoesc), env.autoesc);
        output += "\r\n<li> Name: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "name", env.autoesc), env.autoesc);
        output += "\r\n<li> Legs: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "legs", env.autoesc), env.autoesc);
        output += "\r\n<li> Noise: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "noise", env.autoesc), env.autoesc);
        output += "\r\n<li> Lives: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "lives", env.autoesc), env.autoesc);
        output += "\r\n";
        cb(null, output);;
      }
      catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  })();
})();
