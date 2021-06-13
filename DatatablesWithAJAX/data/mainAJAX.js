$(document).ready(function() {
  $('#example').DataTable( {
      "ajax": "http://localhost:2121/test.txt"
      // "ajax": "https://www.rapidtech1898.com/aaadownload/arrays.txt"
  } );
} );