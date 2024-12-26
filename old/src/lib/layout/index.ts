/**
 * @file index.ts
 * @author James Bennion-Pedley
 * @brief Layout Components - Index
 * @date 17/11/2022
 *
 * @copyright Copyright (c) 2022
 *
 */

import BaseDialog from './BaseDialog/BaseDialog.svelte';
import CircleCaption from './CircleCaption/CircleCaption.svelte';
import Container from './Container/Container.svelte';
import Content from './Content/Content.svelte';
import Footer from './Footer/Footer.svelte';
import Main from './Main/Main.svelte';
import NavBar from './NavBar/NavBar.svelte';
import type { NavItem } from './NavBar/NavBar.svelte';

export { BaseDialog, CircleCaption, Container, Content, Footer, Main, NavBar };
export type { NavItem };

export default {
    BaseDialog,
    CircleCaption,
    Container,
    Content,
    Footer,
    Main,
    NavBar
};
