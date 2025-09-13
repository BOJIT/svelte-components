/**
 * @file notify.ts
 * @author James Bennion-Pedley
 * @brief Simple sonner wrapper for notifications
 * @date 30/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

/*---------------------------------- Imports ---------------------------------*/

import { toast } from 'svelte-sonner';

/*----------------------------------- Types ----------------------------------*/

export type Notification = {
    title: string;
    description?: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    timeout?: number;
};

/*----------------------------------- State ----------------------------------*/

const notifyRaw: any = toast;

/*--------------------------------- Functions --------------------------------*/

function notify(n: Notification) {
    switch (n.type) {
        case 'info':
            toast.info(n.title, {
                description: n.description,
                duration: n.timeout
            });
            break;
        case 'success':
            toast.success(n.title, {
                description: n.description,
                duration: n.timeout
            });
            break;
        case 'warning':
            toast.warning(n.title, {
                description: n.description,
                duration: n.timeout
            });
            break;
        case 'error':
            toast.error(n.title, {
                description: n.description,
                duration: n.timeout
            });
            break;
        default:
            toast(n.title, {
                description: n.description,
                duration: n.timeout
            });
            break;
    }
}
/*---------------------------------- Exports ---------------------------------*/

export { notify, notifyRaw };
