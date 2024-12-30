import { Popover as PopoverPrimitive } from 'bits-ui';
import Content from './popover-content.svelte';
const PopoverRoot: typeof PopoverPrimitive.Root = PopoverPrimitive.Root;
const PopoverTrigger: typeof PopoverPrimitive.Trigger = PopoverPrimitive.Trigger;
const PopoverClose: typeof PopoverPrimitive.Close = PopoverPrimitive.Close;

export {
    PopoverRoot as Popover,
    Content,
    PopoverTrigger as Trigger,
    PopoverClose as Close,
    //
    PopoverRoot,
    Content as PopoverContent,
    PopoverTrigger,
    PopoverClose
};
