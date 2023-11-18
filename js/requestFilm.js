function validate() {
    var vldt = true;
    if (document.req.book.value == "") {
        alert("Please enter the film name");
        vldt = false;
    } 
    return vldt;
}

function display() {
    if (validate())
        alert("Thanks! We will try to provide this film as soon as possible.")
}