$ = jQuery
$.fn.selected = ->
	@click (event) ->
		if $(event.target).is(this)
			clickTarget =  event.target
		else
			clickTarget = $(event.target).closest(this)[0]

		if clickTarget is event.currentTarget
			clickTarget = $(clickTarget)
			className = clickTarget.attr("class").split(" ")[0]
			$("*[class*=" + className + "]").not(clickTarget).removeClass "selected odd even"
			clickTarget.addClass "selected"

			if clickTarget.hasClass "odd"
				clickTarget.addClass "even"
				clickTarget.removeClass "odd"
			else
				clickTarget.addClass "odd"
				clickTarget.removeClass "even"