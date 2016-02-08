var PersonDetailsModel = (function () {
    function PersonDetailsModel() {
        this.details = ko.observableArray([]);
    }
    return PersonDetailsModel;
})();
function fetchParentName(Id) {
    var FullName = "";
    $.getJSON("http://localhost:33486/People/ParentName/" + Id, function (Data) {
        FullName = Data;
    });
    return FullName;
}
//View details:
$(document).ready(function () {
    var vm;
    var serverTask;
    serverTask = JSON.parse($("#serverJSON").val());
    vm = new PersonDetailsModel();
    var MotherName = "";
    var FatherName = "";
    var Gender = "Female";
    if (serverTask.FatherID != null) {
        FatherName = fetchParentName(serverTask.FatherID);
    }
    if (serverTask.MotherID != null) {
        MotherName = fetchParentName(serverTask.MotherID);
    }
    if (serverTask.Gender == "1") {
        Gender = "Male";
    }
    vm.details.push(new Person(serverTask.Id, serverTask.FName, serverTask.MName, serverTask.LName, Gender, FatherName, MotherName, serverTask.FatherID, serverTask.MotherID));
    ko.applyBindings(vm);
});
//# sourceMappingURL=persondetails.js.map