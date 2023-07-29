(function($) {

    "use strict";


    /* Blog Page Pagination change default [span] to [a] tag addition */
    $('.nav-links .page-numbers li span').each(function() {
        $(this).replaceWith($('<a class="active" href="#">' + this.innerHTML + '</a>'));
    });

    /* Blog Page Pagination screen-reader-text remove */
    $('.pagination .screen-reader-text').remove();

    /* Blog Single Page Comment Section Children  */
    $('.children .comment').addClass('replay-comment');

    /* Comment Respond Class Addition */
    $('.comment-respond').addClass('comments-form-area');


    /*
    =============
    S I D E B A R
    =============
    */

    /* Sidebar Class Addition */
    $('.sidebar').addClass('default-sidebar');

    /* Search Class Remove*/
    $('.widget_search').removeClass('sidebar-widget');

    /* Sidebar Categories Class Add*/
    $('.widget_categories').addClass('sidebar-categories');
    $('.widget_categories ul').addClass('categories-list clearfix');

    $('.widget_product_categories').addClass('sidebar-categories');
    $('ul.product-categories').addClass('categories-list clearfix');

    /* Sidebar Archives Class Add*/
    $('.widget_archive').addClass('sidebar-archives');
    $('.widget_archive .widget-content').each(function() {
        $(this).replaceWith($('<div class="widget-content"><div class="select-box">' + this.innerHTML + '</div></div>'));
    });

    /* Sidebar TagCloud Class Add */
    $('.widget_tag_cloud').addClass('sidebar-tags');
    $('.tag-cloud-link').removeAttr("style");

    $('ul.wp-tag-cloud').addClass('tags-list');

    /* Search Class Add*/
    $('.widget_shelder_recent_blog_posts').addClass('sidebar-post');

    // $(".header-nav").append('<li class="search-box-outer"><div class="search-btn"><button type="button" class="search-toggler"><i class="fas fa-search"></i>Search</button></div></li>');


    jQuery(".bg_image").each(function() {
        var attr = $(this).attr('data-image-src');

        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }

    });


})(window.jQuery);