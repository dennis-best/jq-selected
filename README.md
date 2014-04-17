#jq-selected

Wish you could stye more than :hover with CSS? Add CSS classes to recently clicked items and boldly let CSS handle mundane tasks normally handled by javascript. 

## Whut? Why?

I got tired of scripting .click events in javascript for things like drop-down menus, tooltips, popups, modals, etc. 

jq-selected adds classes to recently clicked items so you easily can apply CSS -- and CSS animations!

When targeted item is clicked, it gets the class "selected" and either the class "odd" or "even" depending on the number of times it was clicked. 

###  Usage

Add this to your document.ready

    $(".foo").selected()
    
Foo can be whatever. 

Now, when .foo is clicked, it gets the class **selected** and either the class **odd** or **even** depending on the number of times it was clicked. 

Other items that begin with the same class as the .foo you clicked (can be .foo or any other class)  are toggled, you can style only the most recent item "with even or odd" or all of them with "selected".

Styling could go something like this:

	.foo.selected {
		color: red;
	}
	
	.foo.selected.odd {
		color: blue;
	}
	
	.foo.selected.even {
		color: green;
	}
	
	
