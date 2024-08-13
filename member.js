function skillsMember() {
    this.name = "skill member";
    this.age = 25;
    this.job = "developer";
    this.skills = ["html", "css", "js"];
    this.show = function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Job: " + this.job);
        console.log("Skills: " + this.skills);
    };
}