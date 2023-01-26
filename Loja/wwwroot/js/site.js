// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#table-produtos').DataTable({
        "language": {
            search: '<i class="fa fa-filter" aria-hidden="true"></i>',
            searchPlaceholder: 'Buscar produto'
        }
});
    autoFill: true;
   
});



