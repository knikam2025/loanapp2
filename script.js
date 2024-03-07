document.getElementById('lform').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pan = document.getElementById('pan').value;
    const loanamt = document.getElementById('loanamt').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // next page
    window.location.href = "/confirm.html";
});

function caliemi() {
    var interest = 8.5;
    var loanAmt = parseInt(document.getElementById("loanamt").value);
    var duration = 15;
    var totalEMI = loanAmt / (duration * 12);
    var interestEMI = loanAmt * (interest / (100 * 12));
    var finalAmt = totalEMI + interestEMI;

    document.getElementById("calemi").innerHTML = "EMI: " + Math.round(finalAmt);
    console.log("EMI: " + Math.round(finalAmt));
}

var form = document.getElementById("lform");
form.addEventListener('submit', () => {
    var otp = Math.floor(Math.random() * 1000 + 1000);
    console.log(otp);
    alert(otp);

    localStorage.setItem('Mainotp', otp);
});
