// Form Submit Listeners

document.getElementById("form-1").addEventListener("submit", function(){
    dataLayer.push({
        'email': document.getElementById("email").value,
        'phone-number': document.getElementById("phone-number").value,
        'date-select': document.getElementById("date-select").value
    });
});

document.getElementById("form-2").addEventListener("submit", function(){
    console.log(document.getElementById("ice-cream").value);
    dataLayer.push({
        'ice-cream': document.getElementById("ice-cream").value,
        'tea': document.getElementById("tea").value
    });
});