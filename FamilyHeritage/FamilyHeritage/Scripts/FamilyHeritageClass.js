var Person = (function () {
    function Person(Id, FName, MName, LName, Gender, FatherName, MotherName, FatherID, MotherID) {
        this.Id = ko.observable(Id);
        this.FName = ko.observable(FName);
        this.MName = ko.observable(MName);
        this.LName = ko.observable(LName);
        this.Gender = ko.observable(Gender);
        this.FatherName = ko.observable(FatherName);
        this.MotherName = ko.observable(MotherName);
        this.FatherID = ko.observable(FatherID);
        this.MotherID = ko.observable(MotherID);
    }
    return Person;
})();
//# sourceMappingURL=FamilyHeritageClass.js.map