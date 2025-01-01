import { LinkPreview as HoverCardPrimitive } from 'bits-ui';

import Content from './hover-card-content.svelte';
const HoverCardRoot: typeof HoverCardPrimitive.Root = HoverCardPrimitive.Root;
const HoverCardTrigger: typeof HoverCardPrimitive.Trigger = HoverCardPrimitive.Trigger;

export {
    HoverCardRoot as Root,
    Content,
    HoverCardTrigger,
    HoverCardRoot as HoverCard,
    Content as HoverCardContent,
    HoverCardTrigger as Trigger
};
