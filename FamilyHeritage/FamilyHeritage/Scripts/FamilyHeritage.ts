

class PersonViewModel {
    public details: KnockoutObservableArray<Person>;
    constructor() {
        this.details = ko.observableArray([]);
    }
}

//Get Name from ID

function getFullName(Id: number, Data: any[]) {
    var Name: string;
    for (var j = 0; j < Data.length; j++) {
        if (Id == Data[j].Id) {
            return Name = Data[j].FName + " " + Data[j].MName + " " + Data[j].LName;
        }
    }
}

//View details:

$(document).ready(function () {
    var vm: PersonViewModel;
    var personDetails: any[];
    personDetails = JSON.parse($("#serverJSON").val());
    vm = new PersonViewModel();
    for (var i = 0; i < personDetails.length; i++) {
        var serverTask: any;
        var MotherName: string = "";
        var FatherName: string = "";
        var Gender: string = "Female";
        serverTask = personDetails[i];
        if (serverTask.FatherID != null) {            
            FatherName = getFullName(serverTask.FatherID, personDetails);
        }
        if (serverTask.MotherID != null) {
            MotherName = getFullName(serverTask.MotherID, personDetails);
        }
        if (serverTask.Gender == "1") {
            Gender = "Male";
        }
        vm.details.push(new Person(serverTask.Id, serverTask.FName, serverTask.MName, serverTask.LName, Gender, FatherName, MotherName, serverTask.FatherID, serverTask.MotherID));
    }
    ko.applyBindings(vm);
});




