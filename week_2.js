let employee = {
    firstName: "Peter",
    lastName: "Peterson",
    position: "developer",
    experience : 4,
    gender : "man" , 	
    showProps: function(){
        return this.firstName + " " + this.lastName + " " + this.position + " " + this.experience + " " + this.gender
    };				
};
employee (showProps);
