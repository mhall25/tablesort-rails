function activateTablesort() {
  var tables = document.getElementsByClassName('tablesort');
  for (var i = 0; i < tables.length; i++) {
    new Tablesort(tables[i]);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  activateTablesort();
});
