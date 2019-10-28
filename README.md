---
homepage: true
title: VuePress + Quasar
---

### Stuff inside README.MD

##### Quasar Button

<q-btn color="black" @click="$q.notify('Hello World')">Hello World (Click me)</q-btn>

##### Custom Quasar Button (see ./components/MyButton.vue)

<my-button>Hello World</my-button>

##### Inline Quasar Table with variable override ($table-border-color = #00FF00, see ./styles/variables.styl)

<div class="q-pa-md">
<q-table :data="[{ name: 'bob'}]" :columns="[{name: 'name', field: 'name', label: 'Name' }]">
</q-table>
</div>

##### Custom Div with quasar variables inside scoped style block (see ./components/MyColorDiv.vue)
<my-color-div>Am I in color?</my-color-div>

##### Inline Quasar Button with custom color (see ./styles/custom.styl)
<q-btn color="whatever">Whatever</q-btn>