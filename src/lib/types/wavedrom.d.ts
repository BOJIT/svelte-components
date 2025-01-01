declare module 'wavedrom' {
    class Wavedrom {
        version: string;
        waveSkin: {
            [key: string]: any[];
        };
        eva(): any;
        renderAny(): void;
        renderWaveForm(): void;
        renderWaveElement(
            index: any,
            source: any,
            outputElement: HTMLElement,
            waveSkin: any,
            notFirstSignal: boolean
        ): void;
    }
    var out: Wavedrom;
    export = out;
}

declare module 'wavedrom/skins/dark';
