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
        // quando sono sull'area tolgo l'icon "microphone" e metto l'icona "paper plane"
        $ (".footer-icon-right i").toggleClass ("fa fa-microphone fas fa-paper-plane")
    });

    // intercetto l'uscita dal focus
    $ (".new-message-inputs").blur (function () {
        // quando sono sull'area tolgo l'icon "microphone" e metto l'icona "paper plane"
        $ (".footer-icon-right i").toggleClass ("fa fa-microphone fas fa-paper-plane")
    });


    function inviaMessaggio () {
        // prendo il contenuto del messaggio e lo salvo in una variabile
        var testoMessaggio = $ (".new-message-inputs").val ();
        console.log(testoMessaggio.length);

        if (testoMessaggio.length != 0) {
            // creo una variabile dove salvo la copia del messaggio inserito dall'utente
            var nuovoMessaggio = $ (".template .message").clone ();
            console.log(nuovoMessaggio);

            // inserisco il testoMessaggio all'interno di nuovoMessaggio, nello span con classe "text-message"
            nuovoMessaggio.children(".text-message").text(testoMessaggio);

            // aggiungo la classe sent
            nuovoMessaggio.addClass("sent");

            // unisco il nuovoMessaggio all'HTML nel div con classe "right-message"
            $ (".right-messages.active").append (nuovoMessaggio);

            // ripulisco l'input, così che sarà libero per un nuovo messaggio
            $ (".new-message-inputs").val("");
        }
    }

});
