const createDataTable = (tableName, customCreateDataTable) => {
  let tableConfig = new Object();
  tableConfig.language = new Object();
  tableConfig.language.info = language.globals.table.info;
  tableConfig.language.search = language.globals.table.search;
  tableConfig.language.searchPlaceholder = language.globals.table.searchPlaceholder;
  tableConfig.language.zeroRecords = language.globals.table.zeroRecords;
  tableConfig.language.lengthMenu = language.globals.table.lengthMenu;
  tableConfig.language.aria = new Object();
  tableConfig.language.aria.sortAscending = language.globals.table.aria.sortAscending;
  tableConfig.language.aria.sortDescending = language.globals.table.aria.sortDescending;
  tableConfig.language.paginate = new Object();
  tableConfig.language.paginate.next = language.globals.table.paginate.next;
  tableConfig.language.paginate.previous = language.globals.table.paginate.previous;
  tableConfig.lengthChange = true;
  tableConfig.searching = true;
  tableConfig.paging = true;
  tableConfig.ordering = true;
  tableConfig.info = true;
  // // Criar estrutura da tabela
  if ( $.fn.dataTable.isDataTable( tableName ) ) {
     return $(tableName).DataTable();
  }
  else {
    if (customCreateDataTable) {
      return customCreateDataTable(tableName, tableConfig);
    }
    else {
      return $(tableName).DataTable(tableConfig);
    }
  }
};
