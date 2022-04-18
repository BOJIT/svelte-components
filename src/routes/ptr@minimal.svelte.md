<svelte:head>
	<title>PTR</title>
</svelte:head>

<script>
	import CodeEditor from "$lib/widgets/CodeEditor/CodeEditor.svelte";
	import CopyButton from "$lib/widgets/CodeEditor/CopyButton.svelte";
	import LineNumbers from "$lib/widgets/CodeEditor/LineNumbers.svelte";
	import CAD from "$lib/widgets/CAD/CAD.svelte";
	import TestGeometry from "$lib/test/testGeometry.demo.glb";

	import "prismjs/prism.js";
	import "prismjs/components/prism-bash.js";
	import "prismjs/components/prism-c.js";
	import "prismjs/components/prism-cpp.js";
	import "prismjs/components/prism-json.js";
	import "prismjs/components/prism-python.js";

	let code = "{\n\t\n}";
</script>

# Heading 1

Excepteur aliquip `code` exercitation aliqua excepteur tempor id. Laborum id eiusmod excepteur occaecat culpa incididunt sit deserunt Lorem sint ipsum dolore. Aliqua aliquip amet ea cillum excepteur dolor laboris excepteur ea sint adipisicing.

<CodeEditor lineNumbers={true} language="json" bind:code/>

## Heading 2

Magna [proident](https://github.com) consequat consequat ut non. Consectetur consequat duis ea amet ut [aliquip](https://example.com) ut sit cillum.

<CAD geometry={TestGeometry} />

Occaecat adipisicing pariatur sunt cillum.

<LineNumbers />
<CopyButton />

```c
uint8_t test = {4, 5, 7};

int main(uint8_t *main)
{
	test[4] = 5;
}
```

### Heading 3

<LineNumbers />
<CopyButton />

```bash
#!/bin/bash

echo "test"
```

Ad adipisicing `elit culpa adipisicing ea nulla magna ut. Ad` labore do enim voluptate quis do sint officia ea occaecat exercitation. Anim et cupidatat velit enim cillum labore mollit. Ad et occaecat do dolor aliquip fugiat sint tempor est duis aliquip. Ullamco id reprehenderit ea quis in aliquip irure ipsum sint labore ad proident reprehenderit. Id officia sunt fugiat consequat labore minim.

<LineNumbers />
<CopyButton />

```js
var x = 5;
x.concat(6);
```

#### Heading 4

- Ordered List
- Test
	1. Nested
	2. List
		1. Test
		2. TEST

---

##### Heading 5

1. Ordered
2. List
	- Nested
	- Unordered

<LineNumbers />
<CopyButton />

```python
print("hello")

def exit():
	pass
```

###### Heading 6

<CopyButton />

```css
hr {
	background-color: blue;
}
```

---

test

<LineNumbers />
<CopyButton />

```json
{
	"text": true
}
```
