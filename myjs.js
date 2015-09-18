

        var Cost;

function tally()
        {
        Cost = 0;
        if (document.orderform.Item1.checked) { Cost = Cost + 300;    }
        if (document.orderform.Item2.checked) { Cost = Cost + 50;    }
        if (document.orderform.Item3.checked) { Cost = Cost + 700;               }
        if (document.orderform.Item4.checked) { Cost = Cost + 150;               }
        if (document.orderform.Item5.checked) { Cost = Cost + 150;    }
        if (document.orderform.Item6.checked) { Cost = Cost + 130;    }
        if (document.orderform.Item7.checked) { Cost = Cost + 120;               }
        if (document.orderform.Item8.checked) { Cost = Cost + 75;             }
       if (document.orderform.Item9.checked) {  Cost = Cost + 2500;               }

       

        Cost = shilling(Cost);
       
        

        document.orderform.Total.value = "Ksh" + Cost;
       
        
        }

function shilling (amount)
{
        amount = parseInt(amount * 100);
        amount = parseFloat(amount/100);
        if (((amount) == Math.floor(amount)) && ((amount - Math.floor (amount)) == 0))
        {
                amount = amount + ".00"
                return amount;
        }
        if ( ((amount * 10) - Math.floor(amount * 10)) == 0)
        {
                amount = amount + "0";
                return amount;
        }
        if ( ((amount * 100) - Math.floor(amount * 100)) == 0)
        {
                amount = amount;
                return amount;
        }
        return amount;
}

