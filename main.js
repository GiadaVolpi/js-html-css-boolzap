$ (document).ready (function () {
    // intercetto il click per invio messaggio
    $ (".footer-icon-right").click (function () {
        inviaMessaggio();
    });

    // intercetto l'invio con la tastiera (tasto Enter)
    $ (".new-message-inputs").keypress (function (event) {
        if (event.which == 13) {
            inviaMessaggio();
        }
    });

    // intercetto il focus sull'area di input del nuovoMessaggio
    $ (".new-message-inputs").focus (function () {
        // quando sono sull'area tolgo l'icona "microphone" e metto l'icona "paper plane"
        $ (".footer-icon-right i").toggleClass ("fa fa-microphone fas fa-paper-plane")
    });

    // intercetto l'uscita dal focus
    $ (".new-message-inputs").blur (function () {
        // quando sono sull'area tolgo l'icona "microphone" e metto l'icona "paper plane"
        $ (".footer-icon-right i").toggleClass ("fa fa-microphone fas fa-paper-plane")
    });



    // intercetto i tasti digitati nell'input della ricerca
    $ ("#search").keyup (function () {
        // prendo il contenuto testuale dell'input
        var testoRicerca = $ ("#search").val ();
        console.log(testoRicerca);

        // se nella ricerca ho scritto qualcosa allora scorro i contatti
        if (testoRicerca.length != 0) {
            // scorro tutti i contatti per cercare ciò che è stato digitato
            $ (".contact").each (function () {
                // prendo il contenuto dei nomi contatto
                var contatto = $ (this).find (".name-surname").text();

                testoRicerca = testoRicerca.toLowerCase ();
                contatto = contatto.toLowerCase ();

                if (testoRicerca == contatto) {
                    
                }


        } else {
            // se il testo della ricerca è uguale a 0 allora mostro tutti i contatti
            $ ("")
        }






        })
    });












    function inviaMessaggio () {
        // prendo il contenuto del messaggio e lo salvo in una variabile
        var testoMessaggio = $ (".new-message-inputs").val ();

        if (testoMessaggio.length != 0) {
            // creo una variabile dove salvo la struttura del template
            var nuovoMessaggio = $ (".template .message").clone ();

            // specifico dove andrà inserito il nuovoMessaggio e quale sarà il suo testo
            nuovoMessaggio.children(".text-message").text(testoMessaggio);

            // aggiungo la classe sent
            nuovoMessaggio.addClass("sent");

            // unisco il nuovoMessaggio all'HTML nel div con classe "right-message"
            $ (".right-messages.active").append (nuovoMessaggio);

            // ripulisco l'input, così che sarà libero per un nuovo messaggio
            $ (".new-message-inputs").val("");

            setTimeout (rispostaComputer, 1000);
        }
    }

    function rispostaComputer () {
        // creo una variabile dove salvo la struttura del template
        var messaggioRisposta = $ (".template .message").clone ();

        // specifico dove andrà inserito il messaggioRisposta e quale sarà il suo testo
        messaggioRisposta.children(".text-message").text("ok");

        // aggiungo la classe sent
        messaggioRisposta.addClass("received");

        // unisco il nuovoMessaggio all'HTML nel div con classe "right-message"
        $ (".right-messages.active").append (messaggioRisposta);
    }

});
