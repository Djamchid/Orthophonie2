// data.js — données phonétiques (fricatives uniquement, MVP)
export const FRICATIVE_DATA = {
    "f_v": {
        label: "Paire f / v",
        words: ["fervent", "faveur", "fièvre", "festif", "furtif", "fugitif", "facultatif", "figuratif", "fictif", "fluvial"],
        minimalPairs: ["faire/vaire", "faux/vaux", "fer/ver", "fil/vil", "fois/voix", "fin/vin", "foi/voie", "feu/vœu", "faim/vain", "faste/vaste", "fente/vente", "foie/voie"]
    },
    "s_z": {
        label: "Paire s / z",
        words: ["saisonnier", "sizerin", "socialisation", "sensibilisation", "synthétiseur", "systématisation", "schizophrénie", "visualisation", "organisation", "réalisation", "dépaysant"],
        minimalPairs: ["son/zone", "sel/zèle", "sève/zèbre", "soir/zouave", "sourd/zouk", "sifflet/zizanie", "silence/zélé", "social/zodiac", "sombre/zombie", "seul/zeugme", "sauf/zoo"]
    },
    "ch_j": {
        label: "Paire ch / j",
        words: ["achalandage", "acheminement", "déchargement", "enchaînement", "déchiffrage", "chevauchée", "acharnement", "approchement", "juché", "enjouer"],
        minimalPairs: ["champ/jambe", "choix/joie", "chatte/jatte", "châle/jalon", "chaise/jaise", "choc/joker", "chaud/jaune", "chimie/j'imite", "cheval/je vais", "chute/jute", "chaîne/j'aime", "chaque/jaque", "chéri/j'ai ri", "char/jarre"]
    }
};
