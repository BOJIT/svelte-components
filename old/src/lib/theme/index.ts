import theme from './theme.js';

/* Library Themes */
import quirky from './palette/quirky.js';
import evergreen from './palette/evergreen.js';
import midnight from './palette/midnight.js';

const palette = {
    quirky,
    evergreen,
    midnight
};

const mode = theme.Mode;

export default theme;
export { mode, palette };
