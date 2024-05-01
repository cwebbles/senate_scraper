import Official from './Official';

export default class Senator extends Official {
    // You can add any additional properties here (committee, bills they've made, time in office, etc.)
    
    constructor(text: string) {
        super(text);
    }
}