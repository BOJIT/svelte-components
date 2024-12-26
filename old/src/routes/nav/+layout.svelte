<script lang="ts">
    import { page } from '$app/stores';

    import { Tabs } from '$lib/widgets';

    const routeMap = {
        '/nav/tab1': 0,
        '/nav/tab2': 1,
        '/nav/tab3': 2
    };

    let index = 0;

    page.subscribe((p) => {
        if (p.route.id in routeMap) index = routeMap[p.route.id];
    });
</script>

<div>
    <Tabs
        bind:index
        tabs={[
            {
                label: 'Tab 1',
                link: 'tab1/'
            },
            {
                label: 'Tab 2',
                link: 'tab2/'
            },
            {
                label: 'Tab 3',
                link: 'tab3/'
            }
        ]}
    />
</div>

<slot />
