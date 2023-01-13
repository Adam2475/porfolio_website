        function countdown()
 		{
 			//object date.

 			var oggi = new Date();

 			var giorno = oggi.getDate();
 			var mese = oggi.getMonth()+1;
 			var anno = oggi.getFullYear();
 			var ora = oggi.getHours();

            if(ora<10)
            {
                ora = "0"+ora;
            }
 			var minuti = oggi.getMinutes();

            if(minuti<10)
            {
                minuti = "0"+minuti;
            }
 			var secondi = oggi.getSeconds();

            if(secondi<10)
            {
                secondi = "0"+secondi;
            }

 			document.getElementById("orologio").innerHTML = giorno+"/"+mese+"/"+anno+" | "+ora+":"+minuti+":"+secondi;

 				//setTimeout serve per chiudere e richiamare una funzione dopo un determinato lasso di tempo espresso in millisecondi.
 			setTimeout("countdown()",1000);

 		}
