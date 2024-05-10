export interface Kanji {
    character: string; // Encoded Kanji
    meaning_EN: string; // as English
    meaning_VI: string; // as Vietnamese
    kunyomi: string[]; // Japanese speak
    onyomi: string[]; // Chinese speak
    sinoVietnamese: string; // the Sino-Vietnamese of the Kanji
    level: string; // "can be N5, N4, N3, N2, N1"
    stroke: number; // number of stroke of kanji
};

