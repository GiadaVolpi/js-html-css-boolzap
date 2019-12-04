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


    // intercetto i tasti digitati nell'input della ricerca con il keyup (cioè nel momento in cui il tasto è stato viene rilasciato)
    $ ("#search").keyup (ricercaContatto);


    // intercetto il click sulla lente d'ingrandimento per dare il via alla ricerca
    $ (".search-icon-container").click (ricercaContatto);


    // intercetto il click sul contatto
    $ (".contact").click (function () {
        // prendo l'attributo data del contatto sul quale ho cliccato
        var chatAttiva = $ (this).attr ("data-utente");
        console.log(chatAttiva);

        // tolgo la classe active da tutti i contatti
        $ (".contact").removeClass ("active");

        // aggiungo classe active al contatto sul quale ho cliccato
        $ (this).addClass ("active");

        // rimuovo la chat attiva
        $ (".chat-contact").removeClass ("active");

        // visualizzo la chat corrispondente al contatto attivo
        $ ('.chat-contact[data-utente="' + chatAttiva + '"]').addClass ("active");
    })


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

    function ricercaContatto () {
        // prendo il contenuto testuale dell'input
        var testoRicerca = $ (this).val ();
        console.log(testoRicerca);

        if (testoRicerca.length != 0) {
            // se la ricerca contiene qualcosa
            // scorro tutti i contatti per cercare ciò che è stato digitato
            $ (".contact").each (function () {

                // cerco all'interno dei contatti i nomi
                var contatto = $ (this).find (".name-surname").text();

                // trasformo il nome contatto e il testo della ricerca in modo che siano tutti in minuscolo
                testoRicerca = testoRicerca.toLowerCase();
                contatto = contatto.toLowerCase();

                // se il testo della ricerca corrisponde al contatto
                if (contatto.includes(testoRicerca)) {
                    // mostro il contatto corrispondente alla testoRicerca
                    $ (this).show ();
                } else {
                    // se il testo della ricerca è uguale a 0 allora mostro tutti i contatti
                    $ (this).hide ();
                }
            });
        } else {
            // altrimenti, se la ricerca non contiene nulla, visualizzo tutti i contatti
            $ (".contact").show ();
        }
    }

});
