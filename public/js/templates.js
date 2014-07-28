(function () {
  (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["animals"] = (function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        output += "<div>\r\n  <label>Created Animals</label>\r\n  ";
        frame = frame.push();
        var t_3 = runtime.contextOrFrameLookup(context, frame, "data");
        if (t_3) {
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            output += "\r\n    <li> <a href=\"#/animal/";
            output += runtime.suppressValue(runtime.memberLookup((t_4), "_id", env.autoesc), env.autoesc);
            output += "\">";
            output += runtime.suppressValue(runtime.memberLookup((t_4), "name", env.autoesc), env.autoesc);
            output += " the ";
            output += runtime.suppressValue(runtime.memberLookup((t_4), "type", env.autoesc), env.autoesc);
            output += "</a>\r\n  ";;
          }
        }
        frame = frame.pop();
        output += "\r\n</div>\r\n";
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
  (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["details"] = (function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        output += "<div style=\"border: black 1px solid;\">\r\n  <h3> DETAILS </h3>\r\n  <li> Type: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "type", env.autoesc), env.autoesc);
        output += "\r\n  <li> Name: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "name", env.autoesc), env.autoesc);
        output += "\r\n  <li> Legs: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "legs", env.autoesc), env.autoesc);
        output += "\r\n  <li> Noise: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "noise", env.autoesc), env.autoesc);
        output += "\r\n  <li> Lives: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "lives", env.autoesc), env.autoesc);
        output += "\r\n  <li> Id: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "_id", env.autoesc), env.autoesc);
        output += "\r\n  <li> Revision: ";
        output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")), "_rev", env.autoesc), env.autoesc);
        output += "\r\n  <br/>\r\n  <a href=\"/#close\">Close</a>\r\n</div>\r\n";
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
  (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["main"] = (function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        output += "<h3>THE ANIMAL CREATOR</h3>\r\n<form class=\"form-horizontal\" action=\"#submit\">\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">What kind of animal is this?</label>\r\n    <div class=\"col-sm-6\">\r\n    <input class=\"form-control\" required name=\"type\" type=\"text\" placeholder=\"Animal Type\"><br/>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">What should we name it?</label>\r\n    <div class=\"col-sm-6\">\r\n      <input class=\"form-control\" required name=\"name\" type=\"text\" placeholder=\"Name\"><br/>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">How many legs does it have?</label>\r\n    <div class=\"col-sm-6\">\r\n      <input class=\"form-control\" name=\"legs\" type=\"text\" placeholder=\"# of Legs\"><br/>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">What noise does it make?</label>\r\n    <div class=\"col-sm-6\">\r\n      <input class=\"form-control\" name=\"noise\" type=\"text\" placeholder=\"Noise\"><br/>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">How many lives does it have?</label>\r\n    <div class=\"col-sm-6\">\r\n      <input class=\"form-control\" name=\"lives\" type=\"text\" placeholder=\"# of Lives\"><br/>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\"> Is it rabid? </label>          \r\n    <div class=\"col-sm-6\">\r\n        <input class=\"pull-right\" name=\"rabid\" type=\"checkbox\" value=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\"><span id=\"animaltypespan\"></span></button>\r\n  </div>\r\n</form>";
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
