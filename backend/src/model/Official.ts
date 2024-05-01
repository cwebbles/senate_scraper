import { randomUUID } from "crypto";
import { extractName, extractParty, extractState } from "./util";

export default abstract class Official {
    private _id: string;
    private _name: string;
    private _party: string;
    private _state: string;

    constructor(text: string) {
        this._id = randomUUID();
        this._name = extractName(text);
        this._party = extractParty(text);
        this._state = extractState(text);
    }

    public get id(): number {
        return this.id;
    }

    public get name(): string {
        return this.name;
    }

    public get party(): string {
        return this.party;
    }

    public get state(): string {
        return this.state;
    }

    public getVote(billId: number): string {
        return `Voting on bill ${billId}`;
    }
}