/// <reference path="jquery-1.10.2.js" />
/// <reference path="knockout-3.4.0.js" />


var personRegisterViewModel;

// use as register person views view model
function Person(Id, FirstName,MiddleName, LastName, Gender, FatherName, MotherName) {
    var self = this;

    // observable are update elements upon changes, also update on element data changes [two way binding]
    self.Id = ko.observable(Id);
    self.FirstName = ko.observable(FirstName);
    self.MiddleName = ko.observable(MiddleName);
    self.LastName = ko.observable(LastName);

    // create computed field by combining first name and last name
    self.FullName = ko.computed(function () {
        return self.FirstName() + " " + self.LastName();
    }, self);
    if (FatherName!=null){
        self.FatherName = ko.computed(function(){return(personName(FatherName))});
    }
    else {
        self.FatherName = ko.computed(FatherName);
    }
    self.MotherName = ko.observable(MotherName);
    self.Gender = ko.observable(Gender);

    // Non-editable catalog data - should come from the server
    self.genders = [
        "Male",
        "Female",
        "Other"
    ];

    self.addPerson = function () {
        var dataObject = ko.toJSON(this);

        // remove computed field from JSON data which server is not expecting
        delete dataObject.FullName;

        $.ajax({
            url: '/api/person',
            type: 'post',
            data: dataObject,
            contentType: 'application/json',
            success: function (data) {
                personRegisterViewModel.personListViewModel.persons.push(new Person(data.Id, data.FirstName, data.MiddleName, data.LastName, data.Gender, data.FatherID,data.MotherID));

                self.Id(null);
                self.FirstName('');
                self.LastName('');
                self.MiddleName('');
                self.Gender('');
                self.FatherName('');
                self.MotherName('');
            }
        });
    };
}

// use as person list view's view model
function PersonList() {
    var self = this;
    // observable arrays are update binding elements upon array changes
    self.persons = ko.observableArray([]);

    self.getPersons = function () {
        self.persons.removeAll();

        // retrieve persons list from server side and push each object to model's persons list
        $.getJSON('/api/person', function (data) {
            $.each(data, function (key, value) {
                self.persons.push(new Person(value.Id, value.FirstName, value.MiddleName,value.LastName,value.Gender,value.FatherID, value.MotherID));
            });
        });
    };

    // remove person. current data context object is passed to function automatically.
    self.removePerson = function (person) {
        $.ajax({
            url: '/api/person/' + person.Id(),
            type: 'delete',
            contentType: 'application/json',
            success: function () {
                self.persons.remove(person);
            }
        });
    };
}

//get parent name

function personName(Id){
          // retrieve persons list from server side and push each object to model's persons list
    $.getJSON('/api/person/'+Id, function (data) {
        $.each(data, function (key, value) {
            return value.FirstName+" "+ value.MiddleName+" "+ value.LastName;
        });
    })
}

// create index view view model which contain two models for partial views
personRegisterViewModel = { addPersonViewModel: new Person(), personListViewModel: new PersonList() };

// on document ready
$(document).ready(function () {
    // bind view model to referring view
    ko.applyBindings(personRegisterViewModel);

    // load person data
    personRegisterViewModel.personListViewModel.getPersons();
});