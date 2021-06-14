$(document).ready(function() {
  $('#example').DataTable( {
      "ajax": "test.txt",
      "columns": [
        // { "data": "name" },
        { "data": "ticker",
          "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            $(nTd).html("<a href='" + "https://www.orf.at" + "'>" + oData.ticker + "</a>");
          }
        },
        { "data": "name" },
        { "data": "calcDate" },
        { "data": "index" },
        { "data": "currency" },
        { "data": "sector" },
        { "data": "industry" },
        { "data": "cap" },
        { "data": "finStock" },
        { "data": "score" },
        { "data": "recommend" }
    ]    
  } );
} );