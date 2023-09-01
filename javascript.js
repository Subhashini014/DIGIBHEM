function RoomAmt(){
    var totdays=parseInt(document.getElementById("tdays").value);
    var rtype=parseInt(document.getElementById("roomtype").value);
    return totdays*rtype;
}
function AminitiesAmt(){
    var todays=parseInt(document.getElementById("tdays").value);
    var amen=parseInt(document.getElementById("Ameniti").value);
    return todays*amen;
}
function AdditionAmt(){
    if(parseInt(document.getElementById("totper").value)<=2){
        return 0;
    }else{
        var totpers=parseInt(document.getElementById("totper").value);
        var tday=parseInt(document.getElementById("tdays").value);
        return (totpers-2)*1000*tday;
    }
}
function TotalAmt(){
    var totroomcost=parseInt(document.getElementById("totrcost").value);
    var totac=parseInt(document.getElementById("Aminitiescost").value);
    var totadd=parseInt(document.getElementById("Additcost").value);
    return totroomcost+totac+totadd;
}
function BalanceAmt(){
    var total=parseInt(document.getElementById("totcost").value);
    var addition=parseInt(document.getElementById("adamount").value);
    return total-addition;
}
function updateResults() {
    document.getElementById("totrcost").value = RoomAmt();
    document.getElementById("Aminitiescost").value =AminitiesAmt();
    document.getElementById("Additcost").value = AdditionAmt();
    document.getElementById("totcost").value = TotalAmt();
    document.getElementById("blsAmt").value = BalanceAmt();
}
document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", function () {
    updateResults();
    });
});