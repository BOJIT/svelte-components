import { Dialog as DialogPrimitive } from 'bits-ui';

import Title from './dialog-title.svelte';
import Footer from './dialog-footer.svelte';
import Header from './dialog-header.svelte';
import Overlay from './dialog-overlay.svelte';
import Content from './dialog-content.svelte';
import Description from './dialog-description.svelte';

const DialogRoot: typeof DialogPrimitive.Root = DialogPrimitive.Root;
const DialogTrigger: typeof DialogPrimitive.Trigger = DialogPrimitive.Trigger;
const DialogClose: typeof DialogPrimitive.Close = DialogPrimitive.Close;
const DialogPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

export {
    DialogRoot as Root,
    DialogRoot,
    DialogTrigger as Trigger,
    DialogTrigger,
    DialogClose as Close,
    DialogClose,
    DialogPortal as Portal,
    DialogPortal,
    Title,
    Title as DialogTitle,
    Footer,
    Footer as DialogFooter,
    Header,
    Header as DialogHeader,
    Overlay,
    Overlay as DialogOverlay,
    Content,
    Content as DialogContent,
    Description,
    Description as DialogDescription
};
