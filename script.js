$('#catalog_check, #license_check, #pc_check, #ad_check').on('change', function(){
    // set reference to select elements
    var catalog_check = $('#catalog_check');
    var license_check = $('#license_check');
    var pc_check = $('#pc_check');
    var ad_check = $('#ad_check');

    if ( catalog_check.prop('selectedIndex') > 0 && license_check.prop('selectedIndex') > 0 ) {
        // remove active class from current active div element
        $('.result.active').removeClass('active');

        // get all result divs, and filter for matching data attributes
        $('.result').filter('[data-catalog_check="' + catalog_check.val() + '"][data-license_check="' + license_check.val() + '"][data-pc_check="' + pc_check.val() + '"][data-ad_check="' + ad_check.val() + '"]').addClass('active');
    }
});