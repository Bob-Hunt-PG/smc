let docVal = document.getElementsByName("defaultAddress").value;
if (docVal = null) {
    let address = document.getElementsByName("defaultAddress");
    let addressBtn = document.getElementsByName("btnSubmit");
    if (address.value = null) {
        addressBtn.attribute('disabled', true);
    };
};
