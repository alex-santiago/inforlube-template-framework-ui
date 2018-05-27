const menuItens = ` [
  { "id": "item0", "ico": "fa-home fa-lg", "description": "Home", "route": "/", "children": [] },
  { "id": "item1", "ico": "fa-clone", "description": "Sample", "route": "/sample", "children": [] },
  { "id": "item1", "ico": "fa-dashboard", "description": "Dashboard", "route": "/dashboard", "children": [] },
  { "id": "item2", "ico": "fa-clone", "description": "Analytics", "route": "#", "children": [
    { "ico": "fa-caret-right", "description": "Exception Logs", "route": "/report-exceptionslog", "parent": "Analytics"},
    { "ico": "fa-caret-right", "description": "Protocols", "route": "/report-protocols", "parent": "Analytics"},
    { "ico": "fa-caret-right", "description": "Chart Protocols", "route": "/chart-protocols", "parent": "Analytics"}
  ] }
] `;
