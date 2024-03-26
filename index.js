function Hesapla(){
var sayı;
var sonuc=1;
sayı=document.getElementById("sayıİnput").value;
for(let index=1;index<=sayı;index++){
sonuc=sonuc*index;
}
document.getElementById("sonucSpan").innerHTML=sonuc;
}
