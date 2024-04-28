(function($){'use strict';var adminbarHeight=0;var headerWrapper=$('.gs-site-header-holder');var mobileHeaderWrapper=$('.gs-mobile-header-holder');var headerHeight=0;var themeBordersHeight=0;$(document).ready(function(){gradaOwlCarouselAnimation();gradaInitSelect2();});function gdsFixedFooter(){if($('body').hasClass('sticky-footer-on')){var $footer=$('footer.site-footer-sticky'),$mainWrapper=$('.site-content .gs-content-wrapper'),footerHeight;$footer.css('display','block');if($footer.length&&$mainWrapper.length){footerHeight=$footer.innerHeight();$mainWrapper.css('margin-bottom',footerHeight+themeBordersHeight+'px');}}}
$('.gs-locked-section-close-button').append('<a class="gs-close-btn" href="#"><span></span></a>');$('.gs-locked-section-invisible.gs-locked-section-close-button .gs-close-btn').on('click',function(e){e.preventDefault();e.stopPropagation();$('.gs-locked-section-invisible').removeClass('active');});$('#wpadminbar').addClass('gs-wpadminbar');function setAdminbarHeight(){if($('#wpadminbar').length){adminbarHeight=$('#wpadminbar').outerHeight();}}
function gradaInitSelect2(){var orderByDropDown=$('.woocommerce-ordering .orderby');if(orderByDropDown.length){orderByDropDown.select2({minimumResultsForSearch:Infinity});}
var variableProducts=$('.gs-woo-page .gs-product-summary .variations td.value select');if(variableProducts.length){variableProducts.select2();}
var shippingCountryCalc=$('#calc_shipping_country');if(shippingCountryCalc.length){shippingCountryCalc.select2();}
var shippingStateCalc=$('.cart-collaterals .shipping select#calc_shipping_state');if(shippingStateCalc.length){shippingStateCalc.select2();}}
function calculateHeaderHeight(){var header,height;header=mobileHeaderWrapper.is(':visible')?mobileHeaderWrapper:headerWrapper;height=header.find('.gs-site-header').outerHeight();header.height(height);if(height>0)headerHeight=height;if(header.hasClass('header-is-absolute')){$('.gs-page-heading-inner').css('padding-top',headerHeight);}}
function setThemeBordersHeight(){if($('.gs-page-boundary').length){themeBordersHeight=$('.gs-border-top').outerHeight();}}
function setWrapperHeight(){var windowHeight,wrapperHeight,footerHeight;windowHeight=$(window).innerHeight();footerHeight=$('.gs-site-footer').outerHeight();if($('.gs-site-header-holder').hasClass('header-is-absolute')||$('.gs-mobile-header-holder').hasClass('header-is-absolute')){wrapperHeight=windowHeight-adminbarHeight-themeBordersHeight*2-footerHeight;$('.gs-content-wrapper').css('min-height',wrapperHeight);}else{wrapperHeight=windowHeight-
adminbarHeight-
themeBordersHeight*2-
headerHeight-
footerHeight;$('.gs-content-wrapper').css('min-height',wrapperHeight);}}
function setErrorHeight(){var windowHeight,errorHeight;windowHeight=$(window).innerHeight();if($('.gs-site-header-holder').hasClass('header-is-absolute')||$('.gs-mobile-header-holder').hasClass('header-is-absolute')){errorHeight=windowHeight-adminbarHeight-themeBordersHeight*2;$('.gs-page-404 .gs-page-heading-outer').css('height',errorHeight);}else{errorHeight=windowHeight-adminbarHeight-themeBordersHeight*2-headerHeight;$('.gs-page-404 .gs-page-heading-outer').css('height',errorHeight);}}
function gradaOwlCarouselAnimation(){$('.owl-theme').each(function(){var owl=$(this);if(owl.data('stage-padding')){return;}
if(owl.data('animation')!=='none'&&owl.data('wow')==='yes'){$(this).find($('.owl-item')).each(function(){if($(this).hasClass('active')){$(this).find('.gs-blog-item, .product-holder, .gs-testimonial-item, .gs-gallery-item, .portfolio-item-holder').addClass(owl.data('animation'));$(this).find('.gs-blog-item, .product-holder, .gs-testimonial-item, .gs-gallery-item, .portfolio-item-holder').removeClass('init-anim');}});owl.on('translated.owl.carousel',function(property){$(this).find($('.owl-item')).each(function(){if($(this).hasClass('active')){$(this).find('.gs-blog-item, .product-holder, .gs-testimonial-item, .gs-gallery-item, .portfolio-item-holder').addClass(owl.data('animation'));$(this).find('.gs-blog-item, .product-holder, .gs-testimonial-item, .gs-gallery-item, .portfolio-item-holder').removeClass('init-anim');}});});}});}
setAdminbarHeight();calculateHeaderHeight();setThemeBordersHeight();setWrapperHeight();setErrorHeight();gdsFixedFooter();var timeout;$('.menu-navigation-regular li.menu-item-has-children, .gs-site-header-inner li.menu-item-has-children').on({mouseenter:function(){clearTimeout(timeout);var subMenu=$(this).children('.sub-menu'),parentSubMenu=$(this).parents('.sub-menu'),windowWidth=$(window).width();if((parentSubMenu.length&&parentSubMenu.hasClass('submenu-left'))||windowWidth-(subMenu.offset().left+subMenu.outerWidth()+1)<0){subMenu.addClass('submenu-left');}
subMenu.addClass('active');},mouseleave:function(){var subMenu=$(this).children('.sub-menu');subMenu.removeClass('active');timeout=setTimeout(function(){subMenu.removeClass('sub-menu-left');}.bind(this),250);}});$('.menu-item.disabled > a').on('click',function(e){e.preventDefault();});if($('.menu-item').hasClass('menu-mega-dropdown')){$('.menu-navigation-regular ul').addClass('nav-megamenu');}
$('<span class="submenu-icon"></span>').insertAfter('.mobile-navigation .menu-item-has-children > a, .menu-navigation-vertical ul .menu-item-has-children > a');$('.mobile-header-btn').on('click',function(e){e.stopPropagation();e.preventDefault();$('.mobile-navigation').toggleClass('active');$('.mobile-navigation .menu-item-has-children > .submenu-icon').removeClass('active');$('.mobile-navigation').find('.sub-menu').slideUp('fast');});$('.mobile-navigation .menu-item-has-children > .submenu-icon, .menu-navigation-vertical ul .menu-item-has-children > .submenu-icon').on('click',function(e){e.stopPropagation();e.preventDefault();$(this).toggleClass('active');var $subMenu=$(this).next('ul');var $menuItems=$(this).closest('ul').children('li');$menuItems.find('.sub-menu').not($subMenu).slideUp('fast');$menuItems.find('.submenu-icon').not(this).removeClass('active');$subMenu.slideToggle('fast');});$('.search-button-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();$('.gs-fullscreen-search').addClass('active');setTimeout(function(){$('.search-form-input').focus();},300);});$('.search-wrapper-close, .gs-fullscreen-search__overlay').on('click',function(){$('.gs-fullscreen-search').removeClass('active');});$(document).on('bind keydown',function(e){if(e.which==27){$('.gs-fullscreen-search').removeClass('active');}});if($('.off-canvas-sidebar-inner').length){var offCanvasSidebarPS=new PerfectScrollbar('.off-canvas-sidebar-inner',{wheelSpeed:2,wheelPropagation:true,minScrollbarLength:20});$(window).on('resize',function(){offCanvasSidebarPS.update();});}
$('.off-canvas-sidebar-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();$('.gs-off-canvas-sidebar').addClass('active');});$('.off-canvas-sidebar-close, .off-canvas-sidebar-overlay').on('click',function(){$('.gs-off-canvas-sidebar').removeClass('active');});$(document).on('bind keydown',function(e){if(e.which==27){$('.gs-off-canvas-sidebar').removeClass('active');}});$(window).scroll(function(){if($(window).scrollTop()>150){$('.scrollto-top').addClass('gotop-inview');}else{$('.scrollto-top').removeClass('gotop-inview');}});$('.scrollto-top').on('click',function(){$('html, body').animate({scrollTop:0},500);return false;});$('.scrollto-top').css('margin',themeBordersHeight);$('.sticky .gs-blog-item .entry-details .entry-details-meta').prepend('<span class="gs-sticky-post gs-divider"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>Sticky</span>');$('.gs-portfolio-content-sticky .gs-portfolio-content-outer').theiaStickySidebar({additionalMarginTop:50});$('.gs-popup').magnificPopup({type:'image',delegate:'.gs-popup-link',tClose:'Close (Esc)',tLoading:'',gallery:{enabled:true,tPrev:'Previous (Left arrow)',tNext:'Next (Right arrow)',tCounter:'%curr% of %total%'},image:{tError:'The image can not be loaded.'},iframe:{markup:'<div class="mfp-iframe-scaler">'+
'<div class="mfp-close"></div>'+
'<figure>'+
'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
'<figcaption>'+
'<div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div>'+
'</figcaption>'+
'</figure>'+
'</div>'},mainClass:'mfp-zoom-in',removalDelay:300,callbacks:{elementParse:function(item){if(item.el.data('type')=='video'){item.type='iframe';}else{item.type='image';}},markupParse:function(template,values,item){values.title=item.el.attr('title');},open:function(){$.magnificPopup.instance.next=function(){var self=this;self.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.next.call(self);},120);};$.magnificPopup.instance.prev=function(){var self=this;self.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.prev.call(self);},120);};},imageLoadComplete:function(){var self=this;setTimeout(function(){self.wrap.addClass('mfp-image-loaded');},16);}}});jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');jQuery('.quantity').each(function(){var spinner=jQuery(this),input=spinner.find('input[type="number"]'),btnUp=spinner.find('.quantity-up'),btnDown=spinner.find('.quantity-down'),min=input.attr('min');btnUp.on('click',function(){var oldValue=parseFloat(input.val());var newVal=oldValue+1;spinner.find('input').val(newVal);spinner.find('input').trigger('change');});btnDown.on('click',function(){var oldValue=parseFloat(input.val());if(oldValue<=min){var newVal=oldValue;}else{var newVal=oldValue-1;}
spinner.find('input').val(newVal);spinner.find('input').trigger('change');});});$(window).on('resize',function(){if('ontouchstart'in window||navigator.maxTouchPoints){return;}
setAdminbarHeight();calculateHeaderHeight();setThemeBordersHeight();setWrapperHeight();setErrorHeight();});var wow=new WOW();wow.init();setTimeout(function(){$('.header-is-sticky .gs-site-header').headroom({tolerance:{up:10,down:40},onTop:function(){$('.header-sticky-scheme .gs-site-header').addClass('gs-site-header-light');},onNotTop:function(){$('.header-sticky-scheme .headroom--not-top').removeClass('gs-site-header-light');}});$('.gs-template-header-is-sticky').headroom({offset:450});},50);var $masonry=$('.isotope-container');var $containers=[];if($('.gs-entries-filter')){$('.gs-entries-filter').each(function(index){$containers.push($(this));});}
function loadMore($button){var this_masonry=$button.parent().siblings('.isotope-container');var loadMorePosts=$button.data('text');var data={};data.exclude=[];var filter=$button.data('filter');if(filter&&filter!=='*'){data.filter=filter;}
var filteredItems=this_masonry.isotope('getFilteredItemElements');if(filteredItems){data.exclude=filteredItems.map(function(item){return item.dataset.entryId;});}
jQuery.ajax({type:'GET',url:window.location.href,data:data,beforeSend:function(){$button.addClass('loading');$button.html('Loading...').prop('disabled',true);},success:function(data){$button.removeClass('loading');var $masonryElement=jQuery(data).find('.isotope-container[data-entries-source="'+
this_masonry.data('entries-source')+
'"]');var $data=$masonryElement.find('.iso-item');var $hasMore=$masonryElement.siblings('.show-more-pagination').find('.show-more-button').length;if($data.length>0){$button.html(loadMorePosts).prop('disabled',false);this_masonry.append($data);this_masonry.isotope('appended',$data);wow.sync();}
if(!$hasMore){$button.parent().hide();var filterClass=filter?'.'+filter:'*';if(filterClass=='*'){$button.parents('.gs-entries-wrapper').find('li').attr('data-all',true);}else{$button.parents('.gs-entries-wrapper').find('li[data-filter="'+filterClass+'"]').attr('data-all',true);}}},error:function(){$button.html('No More Posts');}});}
if($containers){$.each($containers,function(index){var $selector='.gs-entries-filter[data-entries-id="'+$(this).data('entries-id')+'"]';$($selector+' #filters li a').on('click',function(ev){ev.preventDefault();var filterValue=$(this).attr('data-filter');var $masonry=$($selector+' .isotope-container');$masonry.isotope({filter:filterValue});var $loadMoreButton=$(this).parents($selector).find('.show-more-button');if($(this).data('all')===true){$loadMoreButton.parent().hide();}else{$loadMoreButton.html($loadMoreButton.data('text')).prop('disabled',false).parent().show();}
$($selector+' #filters li a').removeClass('active');$(this).addClass('active');});});}
if($masonry.length){$masonry.isotope({layoutMode:'packery',itemSelector:'.iso-item'});$('.show-more-button').on('click',function(e){e.preventDefault();loadMore($(this));});window.dispatchEvent(new Event('resize'));}
$('#filters li a').on('click',function(){setTimeout(function(){window.dispatchEvent(new Event('resize'));},400);});var $fitRows=$('.fitRows');var $fitRowsMasonry=$('.fitRows.isotope-container');if($fitRows.length){$fitRowsMasonry.isotope('destroy');$fitRows.isotope({layoutMode:'fitRows',itemSelector:'.iso-item'});}})(jQuery);