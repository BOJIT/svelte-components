/**
 * @file index.ts
 * @author James Bennion-Pedley
 * @brief Core components - Index
 * @date 17/11/2022
 *
 * @copyright Copyright (c) 2022
 *
 */

import App from "./App/App.svelte";
import Link from "./Link/Link.svelte";
import Notification from "./Notification/Notification.svelte";
import { message } from "./Notification/Notification.svelte";
import SplashScreen from "./SplashScreen/SplashScreen.svelte";

export { App, Link, Notification, message, SplashScreen };

export default {
    App,
    Link,
    Notification,
    message,
    SplashScreen
}
