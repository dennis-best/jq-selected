(function() {
  var $;

  $ = jQuery;

  $.fn.selected = function(options) {
    var parent, selectAll, targetClass;
    if (options == null) {
      options = {};
    }
    parent = options.parent != null ? options.parent : null;
    targetClass = options.targetClass != null ? options.targetClass : null;
    selectAll = options.selectAll != null ? options.selectAll : true;
    return this.click(function(event) {
      var className, clickTarget, targetEl;
      if (event.target !== event.currentTarget) {
        return;
      }
      if ($(event.target).is(this)) {
        clickTarget = event.target;
      } else {
        clickTarget = $(event.target).closest(this)[0];
      }
      if (clickTarget === event.currentTarget) {
        if (targetClass != null) {
          targetEl = "." + targetClass;
          clickTarget = $(event.target).closest(targetEl);
          className = targetClass;
        } else {
          clickTarget = $(clickTarget);
          className = clickTarget.attr("class").split(" ")[0];
        }
        if (parent != null) {
          $("" + parent + " [class*=" + className + "]").not(clickTarget).removeClass("selected odd even");
        } else if (selectAll) {
          $("*[class*=" + className + "]").not(clickTarget).removeClass("selected odd even");
        }
        clickTarget.addClass("selected");
        if (clickTarget.hasClass("odd")) {
          clickTarget.addClass("even");
          clickTarget.removeClass("odd");
        } else {
          clickTarget.addClass("odd");
          clickTarget.removeClass("even");
        }
      }
      return clickTarget.trigger("cssClassChanged");
    });
  };

}).call(this);
