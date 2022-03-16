document.getElementsByName("btnSubmit").attribute('disabled', true);

function disableBtn() {
    let address = document.getElementsByName("DefaultAddresses");
    let addressBtn = document.getElementsByName("btnSubmit");
    if (address.value = null) {
        addressBtn.attribute('disabled', true);
    }else{
        addressBtn.attribute('disabled', false);
    }
};

document.getElementsByName("DefaultAddresses").setAttribute("onChange", disableBtn());

function disabledAlert() {
    let addressBtn = document.getElementsByName("btnSubmit");
    if (addressBtn.attribute('disabled') = null) {
        alert("Please select an address from the drop-down menu.");
    }
}

document.getElementsByName("btnSubmit").setAttribute("onClick", disabledAlert());

