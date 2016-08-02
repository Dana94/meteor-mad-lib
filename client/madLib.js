Template.body.events({

	'click #submitButton': (event,template) =>{

		event.preventDefault();

		console.log("Hello, world");

		let exclamation = template.find("#exclamation").value;

		let adverb = template.find("#adverb").value;

		let verb = template.find("#verb").value;

		let noun = template.find("#noun").value;

		console.log(exclamation + "! you say, as you " + adverb + " jump onto your " + noun +" and " + verb
			+ " into the sunset.");
	} 
});
