function myFunction() {
    var FirstName = document.getElementById("MyForm").elements[0].value;
    console.log("FirstName "+FirstName);
    let ContactNumber=document.getElementById("MyForm").elements[1].value;
    console.log("Contact Number "+ContactNumber);
    let EmailID=document.getElementById("MyForm").elements[2].value;
    console.log("EmailID "+EmailID);
    let Message=document.getElementById("MyForm").elements[3].value;
    console.log("Message "+Message);
}
