
import { extractParty, Party, extractState, State } from "../../src/model/util";

describe('extractLogic', () => {

    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    })

    afterEach(() => {
        consoleSpy.mockRestore();
    })

    describe('extractParty', () => {
        it('should return the party of properly formatted description', () => {
            let description = "(R-MT)";
            expect(extractParty(description)).toBe(Party.Republican);
            expect(consoleSpy).not.toHaveBeenCalled();

            description = "(D-NY)";
            expect(extractParty(description)).toBe(Party.Democrat);
            expect(consoleSpy).not.toHaveBeenCalled();

            description = "(I-VT)";
            expect(extractParty(description)).toBe(Party.Independent);
            expect(consoleSpy).not.toHaveBeenCalled();
        })

        it('should log an error and return an empty string if the description is not properly formatted', () => {
            const description = "RRRR";
            expect(extractParty(description)).toBe("Party not found");

            expect(consoleSpy).toHaveBeenCalledTimes(1);
        })
    })

    describe('extractState', () => {
        it('should return the state of properly formatted description', () => {
            let description = "(R-MT)";
            expect(extractState(description)).toBe(State.MT);

            description = "(D-NY)";
            expect(extractState(description)).toBe(State.NY);

            description = "(I-VT)";
            expect(extractState(description)).toBe(State.VT);
        })

        it('should log an error and return an empty string if the description is not properly formatted', () => {
            const description = "RRRR";
            expect(extractState(description)).toBe("");

            expect(consoleSpy).toHaveBeenCalledTimes(1);
        })
    })
})

