function gstFind(){
                totalPaid = parseFloat(e("totalPaid").value);
                gstPaid = parseFloat(e("gstPaid").value);
                cgstPaid = e("cgstPaid"); var sgstPaid=e("sgstPaid");
                costPrice = e("costPrice"); 
                totalGstPaid= e("totalGstPaid");   
                totalPaid=totalPaid ? totalPaid :0;
                gstPaid=gstPaid ? gstPaid :0;
                totalGstPaid=totalGstPaid ? totalGstPaid :0;
                var taxPaid = gstPaid/2;                
                var myPurchasedPrice = Math.round((totalPaid*100)/(100+gstPaid));
                e("totalGstPaid").innerHTML= roundToTwo(myPurchasedPrice*(gstPaid/100))+" INR";
                costPrice.innerHTML= myPurchasedPrice +" INR";
                var gstAmt = roundToTwo(myPurchasedPrice*((taxPaid)/100));
                cgstPaid.innerHTML=taxPaid+" \%" +" ( "+gstAmt+" INR)";
                sgstPaid.innerHTML=taxPaid+" \%" +" ( "+gstAmt+" INR)";
}

/*
Copyright: Soumen Chakraborty 2019
https://soumen-here.blogspot.com/
Strictly for Educational and Non-commercial Purpose
*/