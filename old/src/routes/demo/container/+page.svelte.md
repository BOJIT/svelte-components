<script lang=ts>
    import { Container } from "$lib/layout";

    import IconAlarm from "@svicons/ionicons-outline/alarm.svelte";
    import IconAmericanFootball from "@svicons/ionicons-outline/american-football.svelte";
</script>

# Container

This is a generic container component. It uses relative positioning. Any filler content should fill 100% width and height. Use `aspect` to set the aspect ratio of this block

<Container buttonLocation="bottom-right" tray={[
    {
        icon: IconAlarm,
        callback: () => {alert("Alarm")}
    },
    {
        icon: IconAmericanFootball,
        callback: () => {alert("American Football")}
    },
]}>
    <iframe title="PCB BOM" src="https://openscopeproject.org/InteractiveHtmlBomDemo/html/carte_test.html"></iframe>
</Container>

This block can be expanded to be full-screen.
