$(document).ready(function() {
  $('#example').DataTable( {
      "ajax": "http://localhost:2121/arrays.txt"
      // "ajax": "arrays.txt"
  } );
} );