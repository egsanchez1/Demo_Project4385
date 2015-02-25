// convert model and make into a title property
function transform(model) {
	//need to convert model to json object
	var carObject = mode.toJSON();
	var output =
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" : model.cid
	};
	return output;
}

//show only cars made by Honda

function filter(collection) {
	return collection.where({
		make : 'Honda'
	}
	);
}

//*comments taken from babb, book isn't too clear*
//this is an event listener to ensure that the TalbleView bindings are cleaned up
//correctly and no memory leaks are left

//Free the model-view data binding resources when the view-controller closes
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

//this is an event listener for when the window opens
//add the datat to collecton AFTER the window is opened. the generated
//data binding code is listening for specific events
// to force a redraw...reset is one of them.
$.mainWindow.addEventListener("open", function(){
	Alloy.Collections.cars.reset(
		[
			{
				"make":"Honda",
			 	"model":"Civic"
			},
			{
				"make":"Honda",
				"model":"Accord"
			},
			{
				"make":"Ford",
				"model":"Escape"
			},
			{
				"make":"Ford",
				"model":"Mustang"
			},
			{
				"make":"Nissan",
				"model":"Altima"
			}
		]
	);			
});

//open window
$.mainWindow.open();