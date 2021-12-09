var value1 = +prompt(' Podaj rok: ');
if ((value1 % 4 == 0 && value1 != 100) || value1 % 400 == 0){
    alert(value1 + ' r' + ' to rok przestępny');
}else{
    alert(value1 + ' r' + ' to rok nie przestępny');
}
