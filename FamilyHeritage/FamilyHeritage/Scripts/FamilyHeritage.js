var PersonViewModel = (function () {
    function PersonViewModel() {
        this.details = ko.observableArray([]);
    }
    return PersonViewModel;
})();
//Get Name from ID
function getFullName(Id, Data) {
    var Name;
    for (var j = 0; j < Data.length; j++) {
        if (Id == Data[j].Id) {
            return Name = Data[j].FName + " " + Data[j].MName + " " + Data[j].LName;
        }
    }
}
//View details:
$(document).ready(function () {
    var vm;
    var personDetails;
    personDetails = JSON.parse($("#serverJSON").val());
    vm = new PersonViewModel();
    for (var i = 0; i < personDetails.length; i++) {
        var serverTask;
        var MotherName = "";
        var FatherName = "";
        var Gender = "Female";
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
//# sourceMappingURL=FamilyHeritage.js.map