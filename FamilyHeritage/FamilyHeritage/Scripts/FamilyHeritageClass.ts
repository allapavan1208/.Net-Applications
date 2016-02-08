class Person {
    Id: KnockoutObservable<number>;
    FName: KnockoutObservable<string>;
    MName: KnockoutObservable<string>;
    LName: KnockoutObservable<string>;
    Gender: KnockoutObservable<string>;
    FatherName: KnockoutObservable<string>;
    MotherName: KnockoutObservable<string>;
    FatherID: KnockoutObservable<number>;
    MotherID: KnockoutObservable<number>;

    constructor(Id: number, FName: string, MName: string, LName: string,
        Gender: string, FatherName: string, MotherName: string,FatherID: number,MotherID: number) {
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
} 