(function() {
  var $;

  $ = jQuery;

  $.fn.selected = function(options) {
    var parent, selectAll;
    if (options == null) {
      options = {};
    }
    parent = options.parent != null ? options.parent : null;
    selectAll = options.selectAll != null ? options.selectAll : true;
    return this.click(function(event) {
      var className, clickTarget;
      if ($(event.target).is(this)) {
        clickTarget = event.target;
      } else {
        clickTarget = $(event.target).closest(this)[0];
      }
      if (clickTarget === event.currentTarget) {
        clickTarget = $(clickTarget);
        className = clickTarget.attr("class").split(" ")[0];
        if (parent != null) {
          $("" + parent + " [class*=" + className + "]").not(clickTarget).removeClass("selected odd even");
        } else if (selectAll) {
          $("*[class*=" + className + "]").not(clickTarget).removeClass("selected odd even");
        }
        clickTarget.addClass("selected");
        if (clickTarget.hasClass("odd")) {
          clickTarget.addClass("even");
          return clickTarget.removeClass("odd");
        } else {
          clickTarget.addClass("odd");
          return clickTarget.removeClass("even");
        }
      }
    });
  };

}).call(this);
