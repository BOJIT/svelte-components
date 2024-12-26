/*-------------------------------- Imports -----------------------------------*/

import type { Palette } from '../theme.js';

/*-------------------------------- Public ------------------------------------*/

const palette: Palette = {
    colours: {
        primary: '#20418c',
        secondary: '#7986cb',
        success: '#76b878',
        alert: '#faa019',
        background: {
            light: '#ffffff',
            dark: '#212121'
        }
    },
    swatch: {
        light: [
            '#fe4a49',
            '#fed766',
            '#226f54',
            '#3e7cb1',
            '#f17300',
            '#1e2d2f',
            '#826aed',
            '#3a506b'
        ],
        dark: [
            '#ef476f',
            '#ffd166',
            '#06d6a0',
            '#118ab2',
            '#fb5607',
            '#cbf3f0',
            '#5c4d7d',
            '#729ea1'
        ]
    },
    fonts: {
        headings: 'comfortaa',
        body: 'montserrat',
        monospace: 'red hat mono'
    }
};

/*-------------------------------- Exports -----------------------------------*/

export default palette;
