import { Dialog as DialogPrimitive } from "bits-ui";

import Title from "./dialog-title.svelte";
import Footer from "./dialog-footer.svelte";
import Header from "./dialog-header.svelte";
import Overlay from "./dialog-overlay.svelte";
import Content from "./dialog-content.svelte";
import Description from "./dialog-description.svelte";

const DialogRoot: typeof DialogPrimitive.Root = DialogPrimitive.Root;
const DialogTrigger: typeof DialogPrimitive.Trigger = DialogPrimitive.Trigger;
const DialogClose: typeof DialogPrimitive.Close = DialogPrimitive.Close;
const DialogPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

export {
    DialogRoot,
    DialogTrigger,
    DialogClose,
    DialogPortal,
    Title as DialogTitle,
    Footer as DialogFooter,
    Header as DialogHeader,
    Overlay as DialogOverlay,
    Content as DialogContent,
    Description as DialogDescription,
};
