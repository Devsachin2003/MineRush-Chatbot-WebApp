var mSortingString = [],
  disableSortingColumn = 4;
mSortingString.push({ bSortable: !1, aTargets: [disableSortingColumn] }),
  $(function () {
    $("#example").dataTable({
      paging: !0,
      ordering: !0,
      info: !0,
      aaSorting: [],
      orderMulti: !0,
      aoColumnDefs: mSortingString,
    });
  });
