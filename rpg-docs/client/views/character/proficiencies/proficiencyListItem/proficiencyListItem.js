Template.proficiencyListItem.helpers({
	profIcon: function(){
		var prof = this.value;
		if (prof > 0 && prof < 1) return "image:brightness-2";
		if (prof === 1) return "image:brightness-1";
		if (prof > 1) return "av:album";
		return "radio-button-off";
	},
	getName: function(){
		if (this.type === "skill") return skills[this.name];
		if (this.type === "save") return saves[this.name];
		return this.name;
	},
});

Template.proficiencyListItem.events({
	"click .proficiency": function(event, instance){
		openParentDialog({
			parent: this.parent,
			charId: this.charId,
			element: event.currentTarget,
		});
	}
});
