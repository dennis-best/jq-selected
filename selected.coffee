$ = jQuery
$.fn.selected = (options={}) ->
  bubbleUpEvent  = if options.bubbleUpEvent? then options.bubbleUpEvent else false
  parent         = if options.parent? then options.parent else null
  targetClass    = if options.targetClass? then options.targetClass else null
  selectAll      = if options.selectAll? then options.selectAll else true

  @click (event) ->
    return unless ((event.target is event.currentTarget) && bubbleUpEvent)
    if $(event.target).is(this)
      clickTarget = event.target
    else
      clickTarget = $(event.target).closest(this)[0]

    if clickTarget is event.currentTarget
      if targetClass?
        targetEl = ".#{targetClass}"
        clickTarget = $(event.target).closest(targetEl)
        className = targetClass
      else
        clickTarget = $(clickTarget)
      className = clickTarget.attr("class").split(" ")[0]

      if parent?
        $("#{parent} [class*=#{className}]").not(clickTarget).removeClass "selected odd even"
      else if selectAll
        $("*[class*=#{className}]").not(clickTarget).removeClass "selected odd even"
      clickTarget.addClass "selected"
      if clickTarget.hasClass "odd"
        clickTarget.addClass "even"
        clickTarget.removeClass "odd"
      else
        clickTarget.addClass "odd"
        clickTarget.removeClass "even"
    clickTarget.trigger "cssClassChanged"