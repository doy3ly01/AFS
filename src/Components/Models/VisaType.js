class VisaType{
    constructor(applicationid, VisaType, documents, passportNumb, nationality,submissionDate, status){
        this.applicationid = applicationid;
        this.VisaType = VisaType;
        this.documents = documents;
        this.passportNumb = passportNumb;
        this.nationality = nationality;
        this.submissionDate = submissionDate;
        this.status = status;
    }

    getApplicationid() {
        return this.applicationid;
    }
    getVisaType() {
        return this.VisaType;
    }
    getDocuments() {
        return this.documents;
    }
    getPassportNumb() {
        return this.passportNumb;
    }
    getNationality() {
        return this.nationality;
    }
    getSubmissionDate() {
        return this.submissionDate;
    }
    getStatus() {
        return this.status;
    }
    updateStatus(newStatus){
        this.status = newStatus;
        // You might want to add more validation or logic depending on your requirements
    }
}