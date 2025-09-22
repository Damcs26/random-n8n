"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
class RandomNumber {
    constructor() {
        this.description = {
            displayName: 'True Random Number',
            name: 'randomNumber',
            group: ['transform'],
            version: 1,
            description: 'Generate a random number between min and max',
            defaults: {
                name: 'Random Number',
            },
            //icon: 'fa:dice',
            icon: 'file:RandomNumber.svg',
            inputs: [{ type: "main" /* NodeConnectionType.Main */ }],
            outputs: [{ type: "main" /* NodeConnectionType.Main */ }],
            properties: [
                {
                    displayName: 'Minimum',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    description: 'Minimum integer value',
                },
                {
                    displayName: 'Maximum',
                    name: 'max',
                    type: 'number',
                    default: 100,
                    description: 'Maximum integer value',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i);
            const max = this.getNodeParameter('max', i);
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
            });
            const random = parseInt(response, 10);
            returnData.push({
                json: {
                    random,
                    min,
                    max,
                    generatedAt: new Date().toISOString(),
                },
            });
        }
        return this.prepareOutputData(returnData);
    }
}
exports.RandomNumber = RandomNumber;
