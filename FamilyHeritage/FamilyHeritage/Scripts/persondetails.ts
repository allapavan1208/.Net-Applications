

class PersonDetailsModel {
    public details: KnockoutObservableArray<Person>;
    constructor() {
        this.details = ko.observableArray([]);
    }
}

function fetchParentName(Id: Number)
{
    var FullName: string = "";   
    $.getJSON("http://localhost:33486/People/ParentName/"+Id, function (Data) {
        FullName= Data;
    });
    return FullName;
}


//View details:

$(document).ready(function () {
    var vm: PersonDetailsModel;
    var serverTask: any;
    serverTask = JSON.parse($("#serverJSON").val());
    vm = new PersonDetailsModel();
    var MotherName: string = "";
    var FatherName: string = "";
    var Gender: string = "Female";
    if (serverTask.FatherID != null) {
        FatherName = fetchParentName(serverTask.FatherID);
    }
    if (serverTask.MotherID != null) {
        MotherName = fetchParentName(serverTask.MotherID);
    }
        if (serverTask.Gender == "1") {
            Gender = "Male";
    }
        vm.details.push(new Person(serverTask.Id, serverTask.FName, serverTask.MName, serverTask.LName, Gender, FatherName, MotherName,serverTask.FatherID,serverTask.MotherID));

        ko.applyBindings(vm);

});




