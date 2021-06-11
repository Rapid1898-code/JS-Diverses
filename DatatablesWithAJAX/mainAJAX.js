$(document).ready(function() {
  $('#example').DataTable( {
      "ajax": "http://localhost:2121/data/arrays.txt"
  } );
} );