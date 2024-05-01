
/**
 * Enum for party abbreviations
 */
export enum Party {
    Republican = 'Republican',
    Democrat = 'Democrat',
    Independent = 'Independent',
    R = 'R',
    D = 'D',
    I = 'I',
    // Add more parties here
}

/**
 * Extracts the party from the description from the official on the website.
 * 
 * TODO: Add more parties to the Party enum/switch statement
 * 
 * @param description of the official from website (ex. "(R-MT)")
 * @returns string of official's party affiliation
 */
export function extractParty(description: string): string {
    const regex = /\(([A-Z])-[A-Z]{2}\)/;
    let match;

    try {
        match = description.match(regex);
    } catch (error) {
        console.error("model/util/extractParty: Error extracting party using regex from official's description: ", error);
    }

    const party = match ? match[1] : '';

    switch (party) {
        case Party.R:
            return Party.Republican;
        case Party.D:
            return Party.Democrat;
        case Party.I:
            return Party.Independent;
        default:
            console.error('extractParty: Official\'s description not formatted properly.');
            return 'Party not found';
    }
}

/**
 * Extracts the official's state from their description on the website.
 * 
 * @param description of the official from website (ex. "(R-MT)")
 * @returns string of official's state abbreviation
 */
export function extractState(description: string): string {
    const regex = /\([A-Z]-([A-Z]{2})\)/;
    let match;

    try {
        match = description.match(regex);
    } catch (error) {
        console.error("model/util/extractState: Error extracting state using regex from official's description: ", error);
    }

    const state =  match ? match[1] : '';

    if (Object.values(State).includes(state as State)) {
        return state;
    } else {
        console.error('extractState: Official\'s description not formatted properly.');
        return '';
    }
}

export enum State {
    AL = 'AL',
    AK = 'AK',
    AZ = 'AZ',
    AR = 'AR',
    CA = 'CA',
    CO = 'CO',
    CT = 'CT',
    DE = 'DE',
    FL = 'FL',
    GA = 'GA',
    HI = 'HI',
    ID = 'ID',
    IL = 'IL',
    IN = 'IN',
    IA = 'IA',
    KS = 'KS',
    KY = 'KY',
    LA = 'LA',
    ME = 'ME',
    MD = 'MD',
    MA = 'MA',
    MI = 'MI',
    MN = 'MN',
    MS = 'MS',
    MO = 'MO',
    MT = 'MT',
    NE = 'NE',
    NV = 'NV',
    NH = 'NH',
    NJ = 'NJ',
    NM = 'NM',
    NY = 'NY',
    NC = 'NC',
    ND = 'ND',
    OH = 'OH',
    OK = 'OK',
    OR = 'OR',
    PA = 'PA',
    RI = 'RI',
    SC = 'SC',
    SD = 'SD',
    TN = 'TN',
    TX = 'TX',
    UT = 'UT',
    VT = 'VT',
    VA = 'VA',
    WA = 'WA',
    WV = 'WV',
    WI = 'WI',
    WY = 'WY'
}

export function extractName(description: string): string {
    const regex = /^[^\s]*/;
    let match;

    try {
        match = description.match(regex);
    } catch (error) {
        console.error("model/util/extractName: Error extracting name using regex from official's description: ", error);
    }

    return match ? match[0] : '';
}

