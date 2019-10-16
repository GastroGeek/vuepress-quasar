---
homepage: true
title: VuePress + Quasar
---

Look ma, a Quasar Button with styling!

##### Basic Button (in .md)

<q-btn color="black" @click="$q.notify('Hello World')">Hello World (Click me)</q-btn>

##### Custom Button (in ./components)

<my-button>Hello World</my-button>

##### Inline table

<div class="q-pa-md">
<q-table :data="[{ name: 'bob'}]" :columns="[{name: 'name', field: 'name', label: 'Name' }]">
</q-table>
</div>