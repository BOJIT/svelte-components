<script>
    import { Button, Icon, TextField } from "$lib/smelte";
</script>

<h3>BUTTONS</h3>

<h6>Basic</h6>
<Button>Button</Button>

<h6>Light</h6>
<Button light>Button</Button>

<h6>Dark</h6>
<Button dark>Button</Button>

<h6>Block</h6>
<Button color="alert" dark block>Button</Button>

<h6>Outlined</h6>
<Button color="secondary" light block outlined>Button</Button>

<h6>Text</h6>
<Button text>Button</Button>

<h6>Disabled</h6>
<Button block disabled>Button</Button>

<h6>FAB <a href="https://material.io/components/buttons-floating-action-button/">(Floating action button)</a></h6>
<Button color="alert" icon="change_history" />

<h6>Fab flat</h6>
<Button color="error" icon="change_history" text light flat />

<h3>TEXT FIELDS</h3>

<h6>Basic</h6>
<TextField label="Test label" />

<h6>With hint</h6>
<TextField label="Test label" hint="Test hint" persistentHint color="blue" />

<h6>With error</h6>
<TextField label="Test label" error="Test error" />

<h6>Outlined</h6>
<TextField label="Test label" outlined />

<h6>Outlined with hint</h6>
<TextField label="Test label" outlined hint="Test hint" />

<h6>Outlined with error</h6>
<TextField label="Test label" outlined error="Test error" />

<h6>Outlined textarea</h6>
<TextField label="Test label" textarea rows="5" outlined />

<h6>With basic validation (type="number" min="10" max="100")</h6>
<TextField label="Test label" outlined type="number" min="10" max="100" />