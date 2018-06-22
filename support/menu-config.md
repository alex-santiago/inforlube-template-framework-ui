# How to Configure the Application Menu

1. Open the file `menu-items.js` located inside the path `js\framework\configuration\`.
2. Configure the menu item objects in the file.

**Menu item properties**

- id - item id
- ico - font awesome icon. Use a font awesome class of your choice together with the `fa-lg` class to enlarge the icon
- description - Do not use a fixed description. Instead link the description to a language localization entry
- route - specify the route to the component. For parent items use `'#'` as the route
- children - a array of items with the same structure described here. For leaf items set as an empty array `[]`

**Example: Two Menu Items without children**

```JavaScript
item = new Object();
item.id = "item0";
item.ico = "fa-home fa-lg";
item.description = "Home";
item.route = "/";
item.children = [];
menuItens.push(item);

item = new Object();
item.id = "item1";
item.ico = "fa-clone";
item.description = "Sample";
item.route = "/sample";
item.children = [];
menuItens.push(item);
```

**Example: One Menu Item without children**

```JavaScript
item = new Object();
item.id = "item3";
item.ico = "fa-clone";
item.description = language.reports.title;
item.route = "#";
item.children = [];
subitem = new Object();
subitem.ico = "fa-caret-right";
subitem.description = language.reports.one;
subitem.route = "/report-one";
subitem.parent = "Analytics";
item.children.push(subitem);
subitem = new Object();
subitem.ico = "fa-caret-right";
subitem.description = language.reports.two;
subitem.route = "/report-two";
subitem.parent = "Analytics";
item.children.push(subitem);
menuItens.push(item);
