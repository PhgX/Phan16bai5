function convert_Celsius() {
let doC = new Temperature ();
doC.Celsius = document.getElementById("temperature").value;
document.getElementById("result").innerHTML =
doC.Celsius + " Độ C: " + "= " + doC.getdoCtodoF() + " Độ F " + " = " + doC.getdoCtodoK() + " Độ K";
}
