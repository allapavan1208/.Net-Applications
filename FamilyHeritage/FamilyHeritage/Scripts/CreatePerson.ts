// Bind DD

function getFathers() {

}

function getMothers() {

}

var Father = function (name, Id) {
    this.fatherName = name;
    this.fatherID = Id;
};
var Mother = function (name, Id) {
    this.motherName = name;
    this.motherID = Id;
};
var viewModel = {
    availableFathers: ko.observableArray([
        new Father("UK", 65000000),
        new Father("USA", 320000000),
        new Father("Sweden", 29000000)
    ]),
    selectedFather: ko.observable(), // Nothing selected by default
    availableMothers: ko.observableArray([
        new Mother("UK", 65000000),
        new Mother("USA", 320000000),
        new Mother("Sweden", 29000000)
    ]),
    selectedMother: ko.observable() // Nothing selected by default
};

$(document).ready(function () {

    ko.applyBindings(viewModel);

    });