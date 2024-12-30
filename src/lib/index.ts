/**
 * @file index.ts
 * @author James Bennion-Pedley
 * @brief Main exports point for library
 * @date 26/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

// Utils
import type * as Utils from './utils';
import * as utils from './utils';

// UI Components
import * as Button from './components/ui/button';
import * as Checkbox from './components/ui/checkbox';
import * as Command from './components/ui/command';
import * as Content from './components/ui/content';
import * as Dialog from './components/ui/dialog';
import * as IconButton from './components/ui/iconbutton';
import * as Input from './components/ui/input';
import * as Link from './components/ui/link';
import * as NavBar from './components/ui/navbar';
import * as Popover from './components/ui/popover';
import * as Progress from './components/ui/progress';
import * as RadioGroup from './components/ui/radio-group';
import * as ScrollArea from './components/ui/scroll-area';
import * as Select from './components/ui/select';
import * as Separator from './components/ui/separator';
import * as Slider from './components/ui/slider';
import * as Sonner from './components/ui/sonner';
import * as Switch from './components/ui/switch';
import * as Tabs from './components/ui/tabs';

// Widgets
import * as Widgets from './components/widgets';

// Root
import App from './components/App.svelte';

export type { Utils };

export {
    // Utils
    utils,

    // Components
    Button,
    Checkbox,
    Command,
    Content,
    Dialog,
    IconButton,
    Input,
    Link,
    NavBar,
    Popover,
    Progress,
    RadioGroup,
    ScrollArea,
    Select,
    Separator,
    Slider,
    Sonner,
    Switch,
    Tabs,

    // Widgets
    Widgets,

    // Root
    App
};
