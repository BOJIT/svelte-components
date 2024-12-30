<svelte:head>

<title>Demo - CAD</title>
</svelte:head>

<script>
    import { Container } from "$lib/layout";
    import { CAD } from "$lib/widgets";
</script>

# CAD

This is the raw CAD widget...

---

<div style="width: 100%; height: 600px;">
    <CAD geometry="https://cdn.bojit.org/files/glb/kinectIP.glb" />
</div>

---

Here it is in a container element!

<Container>
    <CAD geometry="https://cdn.bojit.org/files/glb/BOJIT_V3.glb"/>
</Container>
