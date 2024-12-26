import * as localForage from "localforage";

import { mode } from "$lib/theme";
import { message } from "$lib/core";

/*
    Database Index
*/
const stores = {
    mode: mode
}

/*----------------------------------------------------------------------------*/

function downloadFile(blob: Blob, filename: string) {
    /* Create hidden download link and programatically click */
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function uploadFile(callback: ((files: File[]) => void), ext: string, multiple?: boolean) {
    const i = document.createElement('input');
    i.type = "file";
    i.accept = ext;
    if(multiple) {
        i.multiple = true;
    }
    document.body.appendChild(i);
    i.click();
    document.body.removeChild(i);

    /* Create hook for re-focus (if no files are added) */
    document.body.onfocus = (() => {
        document.body.onfocus = null;
        window.setTimeout(() => {
            if(i.files.length == 0) {
                callback([]);   // Pass no files to callback
                i.remove();
            }
        }, 100);
    });

    /* File upload handler */
    i.addEventListener('change', () => {
        callback(Array.from(i.files));
        i.remove();
    });
}

/*----------------------------------------------------------------------------*/

async function init() {
    for (const [key, store] of Object.entries(stores)) {
        /* Pull entry from local storage */
        let entry = await localForage.getItem(key);
        if(entry != null) {
            store.set(entry as any);
        }

        /* Local storage is subscribed to store updates */
        store.subscribe((val: any) => {
            localForage.setItem(key, val);
        });
    }
}

function clear() {
    localForage.clear();    // Clear local Storage
    for (const [, store] of Object.entries(stores)) {
        store.reset();      // Reset all stores
    }
    message.push({
        "title": "Clear Data",
        "message": "All browser settings have been removed",
        "type": "info",
        "timeout": 5
    });
}

export default {
    downloadFile,
    uploadFile,
    init,
    clear
}
