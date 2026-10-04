export type Post = {
  slug: string; title: string; cat: string; date: string; updated: string; read: number; desc: string;
  published: boolean;
  answer?: string;
  sections?: { h: string; p: string[]; list?: string[] }[];
  remember?: string[];
  faq?: { q: string; a: string }[];
};

const D = "2026-10-04";

export const POSTS: Post[] = [
  {
    slug: "come-riempire-lagenda-di-una-massaggiatrice", title: "Come riempire l'agenda di una massaggiatrice senza dipendere dal passaparola", cat: "Clienti e agenda", date: D, updated: D, read: 6, published: true,
    desc: "Il passaparola aiuta, ma non basta. Ecco come costruire un flusso di richieste più prevedibile, con calma e un metodo.",
    answer: "Per riempire l'agenda senza dipendere dal passaparola serve un percorso che le persone possano seguire anche senza conoscerti: farsi trovare, capire cosa fai, fidarsi e scriverti. Quando questo percorso è chiaro, le richieste arrivano con più continuità e meno sorprese.",
    sections: [
      { h: "Perché il passaparola da solo non basta?", p: ["Il passaparola è prezioso, ma non lo controlli. Arriva quando arriva, e per questo l'agenda alterna periodi pieni a periodi vuoti.", "Non è un problema di bravura. È che le tue clienti ti scoprono quando qualcuno parla di te, non quando sei tu a poterti far trovare."] },
      { h: "Come scelgono oggi le persone?", p: ["Prima guardano. Poi confrontano. E solo dopo scrivono.", "Se nel momento in cui guardano non trovano chiarezza su chi sei, cosa fai e per chi, non scrivono. Non perché non siano interessate: perché non hanno capito."] },
      { h: "Da dove si comincia davvero?", p: ["Prima di aprire nuovi canali, metti in ordine questi tre punti:"], list: ["Chi aiuti, descritto in una frase che si capisce.", "Cosa offri, con un nome e un prezzo chiari.", "Cosa deve fare una persona interessata per contattarti."] },
      { h: "Quanto tempo serve?", p: ["Dipende da dove parti. L'importante è non fare tutto insieme: un passo alla volta, verificando cosa succede prima di aggiungere il successivo."] },
    ],
    remember: ["Il passaparola non è controllabile, un percorso chiaro sì.", "Prima chiarezza, poi canali.", "Un passo alla volta."],
    faq: [{ q: "Devo per forza usare Instagram?", a: "No. Instagram è un canale possibile, ma conta di più avere un messaggio chiaro e una via semplice per contattarti." }, { q: "Quanto ci vuole per vedere cambiamenti?", a: "Non esiste un tempo uguale per tutte: dipende da dove parti e da quanto tempo puoi dedicare. Conta la costanza." }],
  },
  {
    slug: "mesi-pieni-e-mesi-vuoti", title: "Perché ci sono mesi pieni e mesi vuoti (e come smettere di subirli)", cat: "Clienti e agenda", date: D, updated: D, read: 5, published: true,
    desc: "Se la tua agenda va a ondate, di solito non è sfortuna: è mancanza di un sistema. Come riconoscerlo e cosa cambiare.",
    answer: "Ci sono mesi pieni e mesi vuoti quando le richieste dipendono da eventi che non controlli, come il passaparola o un singolo contenuto che funziona. Si smette di subirli costruendo un percorso costante: farsi trovare in modo regolare e rispondere sempre allo stesso modo.",
    sections: [
      { h: "Perché l'agenda va a ondate?", p: ["Quando le richieste arrivano da fonti occasionali, l'agenda segue quelle fonti. Un mese una cliente parla bene di te e sei piena. Il mese dopo, nessuno.", "Il problema non è l'impegno, e nemmeno la bravura. È che manca un meccanismo regolare."] },
      { h: "Cosa succede nei mesi vuoti?", p: ["Di solito scatta la fretta: si prova tutto, si cambia direzione ogni settimana, si abbassano i prezzi. Così il lavoro diventa ancora meno prevedibile."] },
      { h: "Come si smette di subirli?", p: ["Si inizia dalla continuità, non dall'intensità."], list: ["Scegli un canale principale e presidialo con regolarità.", "Scrivi come rispondi a chi ti contatta, e rispondi sempre così.", "Guarda ogni mese cosa ha portato richieste, e fai più di quello."] },
    ],
    remember: ["Le ondate nascono da fonti occasionali.", "La fretta peggiora le cose.", "Continuità prima di intensità."],
    faq: [{ q: "Abbassare i prezzi nei mesi vuoti aiuta?", a: "Di solito peggiora la percezione del tuo lavoro e non risolve la causa, che è la mancanza di un percorso regolare per farti trovare." }],
  },
  {
    slug: "quanto-far-pagare-un-massaggio", title: "Quanto far pagare un massaggio: come stabilire il prezzo giusto", cat: "Posizionamento e prezzi", date: D, updated: D, read: 6, published: true,
    desc: "Non esiste un prezzo uguale per tutte, ma esiste un modo ordinato per arrivarci. Costi, tempo, valore, contesto.",
    answer: "Il prezzo giusto di un massaggio non si copia dai colleghi: si costruisce partendo dai tuoi costi reali, dal tempo che dedichi e dal valore che la cliente percepisce. Un prezzo chiaro, spiegato bene e coerente con il tuo posizionamento è più forte di uno basso.",
    sections: [
      { h: "Da dove si parte per stabilire un prezzo?", p: ["Dai numeri della tua attività, non dal prezzo del vicino. Conta tutto il tempo: la seduta, ma anche preparazione, pulizia, comunicazione e spostamenti."], list: ["Costi fissi: affitto, assicurazioni, utenze, formazione.", "Costi variabili: oli, biancheria, materiali.", "Tempo reale per ogni seduta, comprese le parti invisibili.", "Quanto vuoi guadagnare, e quante sedute puoi fare senza esaurirti."] },
      { h: "Perché copiare i prezzi degli altri è un rischio?", p: ["Perché non conosci i loro costi, né il loro obiettivo. Rischi di lavorare molto per guadagnare poco, e di attrarre chi sceglie solo in base al prezzo."] },
      { h: "Come si comunica il prezzo senza svendersi?", p: ["Spiegando cosa ricevi: durata, attenzione, cosa è incluso. Un prezzo detto con calma e chiarezza fa meno paura di un prezzo nascosto."] },
    ],
    remember: ["Parti dai tuoi numeri reali.", "Non copiare i prezzi altrui.", "Spiega il valore, non solo la cifra."],
    faq: [{ q: "Esiste un prezzo medio da seguire?", a: "Può servire come riferimento di contesto, ma la tua decisione dovrebbe partire dai tuoi costi, dal tuo tempo e dal tuo posizionamento." }, { q: "Posso alzare i prezzi con le clienti attuali?", a: "Sì, con calma e spiegando il perché. Meglio farlo con preavviso e chiarezza." }],
  },
  ...[
    ["instagram-per-operatrici-del-benessere", "Instagram per operatrici del benessere: da dove si comincia davvero", "Instagram e contenuti"],
    ["rispondere-a-quanto-costa-nei-dm", "Come rispondere a chi scrive \"quanto costa?\" nei DM", "Vendita naturale"],
    ["presentare-la-tua-offerta-senza-svendere", "Come presentare la tua offerta senza svendere il tuo lavoro", "Posizionamento e prezzi"],
    ["prima-guardano-poi-confrontano-poi-scrivono", "Prima guardano, poi confrontano, poi scrivono: come funziona la scelta del cliente oggi", "Clienti e agenda"],
    ["i-primi-10-clienti-online", "I primi 10 clienti online: cosa fare nelle prime 4 settimane", "Clienti e agenda"],
    ["come-scegliere-un-corso-di-massaggio-online", "Come scegliere un corso di massaggio online: 7 domande da farsi", "Tecnica e massaggio"],
    ["errori-dei-principianti-nel-tocco", "Massaggio e consapevolezza del tocco: gli errori più comuni dei principianti", "Tecnica e massaggio"],
    ["intelligenza-artificiale-per-contenuti-nel-benessere", "Come usare l'intelligenza artificiale per creare contenuti nel benessere senza perdere autenticità", "Instagram e contenuti"],
    ["da-operatrice-a-imprenditrice", "Da operatrice a imprenditrice: i 5 passaggi che nessuno ti insegna", "Mindset da imprenditrice"],
  ].map(([slug, title, cat]) => ({ slug, title, cat, date: D, updated: D, read: 6, desc: "In arrivo.", published: false }) as Post),
];

export const CATEGORIES = ["Clienti e agenda", "Posizionamento e prezzi", "Instagram e contenuti", "Vendita naturale", "Mindset da imprenditrice", "Tecnica e massaggio", "Storie e risultati"];
export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
