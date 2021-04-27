// Need to test if this works

document.getElementById("form-1").addEventListener("submit", function(){
    dataLayer.push({
        'email': document.getElementById("email").value,
        'phone-number': document.getElementById("phone-number").value,
        'date-select': document.getElementById("date-select").value
    });
    console.log(dataLayer);
});

document.getElementById("form-2").addEventListener("submit", function(){
    dataLayer.push({
        'ice-cream': document.getElementById("ice-cream").value,
        'tea': document.getElementById("tea").value
    });
    console.log(dataLayer);
});