Per l'esercizio di oggi ho utilizzato la pagina Locations.

La differenza principale tra SSR e CSR è nell'algoritmo delle loro operazioni.
Nel CSR viene mostrata una pagina vuota prima del caricamento, mentre nella SSR viene mostrata la pagina già renderizzata al primo caricamento.
Questo è dovuto al fatto che nel CSR vengono forniti dal server al client i file HTML, Javascript e CSS e il contenuto della pagina viene dinamicamente generato sul browser. Nel SSR invece il lavoro principale avviene all'interno del server, che fornisce la pagina HTML già pronta per essere renderizzata.
Entrambi i metodi presentano vantaggi e svantaggi:
Dal punto di vista di velocità e di forza computazionale richiesta all'utente, è meglio il SSR. Il browser non dovrà processare grossi file JS e in millisecondi mostrerà la pagina.
Per lo stesso motivo da un punto di vista economico, il vantaggio passa al CSR per quanto riguarda l'host della pagina web. I server saranno più agili e leggeri, con meno rischieste HTTP.
D'altro canto un fattore da non sottovalutare è il SEO, i motori di ricerca scansionano le pagine così per come sono nel SSR, riuscendo a capirne il contenuto per proporlo agli utenti.

In sintesi è meglio utilizzare il Server-Side Rendering quando si vuole migliorare il SEO e quando il sito non è particolarmente dinamico e ricco di interazioni particolari.
Il Client-Side Rendering invece è meglio utilizzarlo per web app particolarmente dinamiche, come social network o siti di messaggistica, dove il contenuto cambia costantemente.
