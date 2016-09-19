Template.classDialog.onRendered(function(){
	updatePolymerInputs(this);
});

Template.classDialog.events({
	"color-change": function(event, instance){
		Classes.update(instance.data.classId, {$set: {color: event.color}});
	},
	"tap #deleteButton": function(event, instance){
		Classes.softRemoveNode(instance.data.classId);
		GlobalUI.deletedToast(instance.data.classId, "Classes", "Class");
		GlobalUI.closeDetail();
	},
	"change #classNameInput": function(event){
		var value = event.currentTarget.value;
		Classes.update(this._id, {$set: {name: value}});
	},
	"change #levelValueInput": function(event){
		var value = event.currentTarget.value;
		Classes.update(this._id, {$set: {level: value}});
	},
});

Template.classDialog.helpers({
	class: function(){
		return Classes.findOne(this.classId);
	}
});