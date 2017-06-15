( function( $ ) {



	// Site Identity > Site Title
	wp.customize( 'blogname', function( value ) {
		value.bind( function( newval ) {
			$( '.navbar .navbar-brand h1').text( newval );
		} );
	} );

	// Site Identity > Site Description
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( newval ) {
			$( '.blog .page-header .title' ).text( newval );
		} );
	} );

	// Appearance Settings > General Settings > Boxed Layout
	wp.customize( 'hestia_general_layout', function( value ) {
		value.bind( function() {
			if( $( '.main' ).hasClass( 'main-raised' ) ) {
				$( '.main' ).removeClass( 'main-raised' );
			} else {
				$( '.main' ).addClass( 'main-raised' );
			}
		} );
	} );

	// Appearance Settings > General Settings > Footer Credits
	wp.customize( 'hestia_general_credits', function( value ) {
		value.bind( function( newval ) {
			$( '.footer-black .copyright' ).html( newval );
		} );
	} );

    // Appearance Settings > Appearance Settings > General Settings > Sidebar Width
    wp.customize( 'hestia_sidebar_width', function( value ) {
        value.bind( function( newval ) {
        	if( $('body > .wrapper').width() > 991 ) {
                var layout = wp.customize._value.hestia_page_sidebar_layout(), hestia_content_width, content_width;
                if (layout !== 'full-width' && layout !== '') {
                    hestia_content_width = 100 - newval;

                    if (newval <= 3 || newval >= 80) {
                        hestia_content_width = 100;
                        newval = 100;
                    }
                    content_width = hestia_content_width - 8.33333333;

                    $('.content-sidebar-left, .content-sidebar-right, .page-content-wrap').css('width', hestia_content_width + '%');
                    $('.blog-sidebar, .shop-sidebar.col-md-3').css('width', newval + '%');
                }

                layout = wp.customize._value.hestia_blog_sidebar_layout();
                if (layout !== 'full-width' && layout !== '') {
                    hestia_content_width = 100 - newval;

                    if (newval <= 3 || newval >= 80) {
                        hestia_content_width = 100;
                        newval = 100;
                        if (layout === 'sidebar-left') {
                            $('.blog-posts-wrap, .archive-post-wrap').removeClass('col-md-offset-1');
                        } else {
                            $('.blog-sidebar').removeClass('col-md-offset-1');
                        }
                    } else {
                        if (layout === 'sidebar-left') {
                            $('.blog-posts-wrap, .archive-post-wrap').addClass('col-md-offset-1');
                        } else {
                            $('.blog-sidebar').addClass('col-md-offset-1');
                        }
                    }
                    content_width = hestia_content_width - 8.33333333;

                    $('.blog-posts-wrap, .archive-post-wrap').css('width', content_width + '%');
                    $('.blog-sidebar').css('width', newval + '%');
                }
            }
        } );
    } );

	// Frontpage Sections > Features  > Title
	wp.customize( 'hestia_features_title', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-features .title' ).text( newval );
		} );
	} );

	// Frontpage Sections > Features  > Subtitle
	wp.customize( 'hestia_features_subtitle', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-features .description' ).text( newval );
		} );
	} );

	// Frontpage Sections > About  > Featured Image
	wp.customize( 'hestia_feature_thumbnail', function( value ) {
		value.bind( function( newval ) {
			if( newval === '' ) {
				$( 'section#about' ).removeClass( 'section-image' );
			} else {
                $( 'section#about' ).addClass( 'section-image' );
			}
		} );
	} );


	// Frontpage Sections > Portfolio  > Title
	wp.customize( 'hestia_portfolio_title', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-work .title' ).text( newval );
		} );
	} );

	// Frontpage Sections > Portfolio  > Subtitle
	wp.customize( 'hestia_portfolio_subtitle', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-work .description' ).text( newval );
		} );
	} );

	// Frontpage Sections > Team  > Title
	wp.customize( 'hestia_team_title', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-team .title' ).text( newval );
		} );
	} );

	// Frontpage Sections > Team  > Subtitle
	wp.customize( 'hestia_team_subtitle', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-team .description' ).text( newval );
		} );
	} );

	// Frontpage Sections > Pricing  > Title
	wp.customize( 'hestia_pricing_title', function( value ) {
		value.bind( function( newval ) {
			$( '.pricing .title' ).text( newval );
		} );
	} );

	// Frontpage Sections > Pricing  > Subtitle
	wp.customize( 'hestia_pricing_subtitle', function( value ) {
		value.bind( function( newval ) {
			$( '.pricing .text-gray' ).text( newval );
		} );
	} );

	// Frontpage Sections > Pricing  > Pricing Table One: Title
	wp.customize( 'hestia_pricing_table_one_title', function( value ) {
		value.bind( function( newval ) {
			$( '.pricing .col-md-6:nth-child(1) .card-pricing .category' ).text( newval );
		} );
	} );

	// Frontpage Sections > Pricing  > Pricing Table One: Text
	wp.customize( 'hestia_pricing_table_one_text', function( value ) {
		value.bind( function( newval ) {
			$( '.pricing .col-md-6:nth-child(1) .card-pricing .btn' ).text( newval );
		} );
	} );

	// Frontpage Sections > Pricing  > Pricing Table Two: Title
	wp.customize( 'hestia_pricing_table_two_title', function( value ) {
		value.bind( function( newval ) {
			$( '.pricing .col-md-6:nth-child(2) .card-pricing .category' ).text( newval );
		} );
	} );

	// Frontpage Sections > Pricing  > Pricing Table Two: Text
	wp.customize( 'hestia_pricing_table_two_text', function( value ) {
		value.bind( function( newval ) {
			$( '.pricing .col-md-6:nth-child(2) .card-pricing .btn' ).text( newval );
		} );
	} );

	// Frontpage Sections > Testimonials  > Title
	wp.customize( 'hestia_testimonials_title', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-testimonials .title' ).text( newval );
		} );
	} );

	// Frontpage Sections > Testimonials  > Subtitle
	wp.customize( 'hestia_testimonials_subtitle', function( value ) {
		value.bind( function( newval ) {
			$( '.hestia-testimonials .description' ).text( newval );
		} );
	} );

	// Frontpage Sections > Subscribe  > Background
	wp.customize( 'hestia_subscribe_background', function( value ) {
		value.bind( function( newval ) {
			$( '.subscribe-line' ).css( 'background-image', 'url(' +newval+ ')' );
		} );
	} );

	// Frontpage Sections > Contact  > Background
	wp.customize( 'hestia_contact_background', function( value ) {
		value.bind( function( newval ) {
			$( '.contactus' ).css( 'background-image', 'url(' +newval+ ')' );
		} );
	} );

	// Blog Settiungs > Authors Section > Background
	wp.customize( 'hestia_authors_on_blog_background', function( value ) {
		value.bind( function( newval ) {
			$( '#authors-on-blog.authors-on-blog' ).css( 'background-image', 'url(' +newval+ ')' );
		} );
	} );

	// Blog Settiungs > Subscribe Section > Title
	wp.customize( 'hestia_blog_subscribe_title', function( value ) {
		value.bind( function( newval ) {
			$( '#subscribe-on-blog .title' ).text( newval );
		} );
	} );

	// Blog Settiungs > Subscribe Section > Subtitle
	wp.customize( 'hestia_blog_subscribe_subtitle', function( value ) {
		value.bind( function( newval ) {
			$( '#subscribe-on-blog .description' ).text( newval );
		} );
	} );

	// Colors > Accent Color
	wp.customize( 'accent_color', function( value ) {
		value.bind( function( newval ) {
			$( '.main section:not(.hestia-blogs) a:not(.btn):not(.blog-item-title-link):not(.shop-item-title-link):not(.moretag):not(.button), .hestia-blogs article:nth-child(6n+1) .category a, .card-product .category a, .navbar.navbar-color-on-scroll:not(.navbar-transparent) li.active a').css('color', newval );
			$( '.btn.btn-primary, .card .header-primary, input#searchsubmit, .woocommerce nav.woocommerce-pagination ul li span.current, .woocommerce ul.products li.product .onsale, .woocommerce span.onsale, article .section-text a, .woocommerce .button:not(.btn-just-icon), .woocommerce div.product .woocommerce-tabs ul.tabs.wc-tabs li.active a, .hestia-work .portfolio-item:nth-child(6n+1) .label, .pagination span.current').css('background-color', newval);

			var accentColorVariation1 = convertHex(newval, 14);
			var accentColorVariation2 = convertHex(newval, 20);
			var accentColorVariation3 = convertHex(newval, 42);

			var materialsButton = $( 'input[type="submit"], .btn.btn-primary, .added_to_cart.wc-forward, .woocommerce .single-product div.product form.cart .button, .woocommerce #respond input#submit, .woocommerce button.button, .woocommerce input.button, #add_payment_method .wc-proceed-to-checkout a.checkout-button, .woocommerce-cart .wc-proceed-to-checkout a.checkout-button, .woocommerce-checkout .wc-proceed-to-checkout a.checkout-button, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce input.button:disabled, .woocommerce input.button:disabled[disabled], .woocommerce-message a.button, .woocommerce a.button.wc-backward ' );

			materialsButton.css( '-webkit-box-shadow', '0 2px 2px 0 ' + accentColorVariation1 + ',0 3px 1px -2px ' + accentColorVariation2 + ',0 1px 5px 0 ' + accentColorVariation1 );
			materialsButton.css( 'box-shadow', '0 2px 2px 0 ' + accentColorVariation1 + ',0 3px 1px -2px ' + accentColorVariation2 + ',0 1px 5px 0 ' + accentColorVariation1 );


			//LINKS HOVER STYLE
			var style='<style class="hover-styles">', el;
			style += 	'.card-blog a.moretag:hover, aside .widget a:hover' +
				'{ color: ' + newval + '!important; }';

			style +=	'.dropdown-menu li > a:hover ' +
				'{ background-color:' + newval + '!important; }';

			//BUTTONS BOX SHADOW

			style += 	'input#searchsubmit:hover, .pagination span.current, .btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active, .btn.btn-primary:active:focus, .btn.btn-primary:active:hover, .woocommerce nav.woocommerce-pagination ul li span.current, .added_to_cart.wc-forward:hover, .woocommerce .single-product div.product form.cart .button:hover, .woocommerce #respond input#submit:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, #add_payment_method .wc-proceed-to-checkout a.checkout-button:hover, .woocommerce-cart .wc-proceed-to-checkout a.checkout-button:hover, .woocommerce-checkout .wc-proceed-to-checkout a.checkout-button:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce input.button:disabled:hover, .woocommerce input.button:disabled[disabled]:hover, .woocommerce div.product .woocommerce-tabs ul.tabs.wc-tabs li.active a, .woocommerce div.product .woocommerce-tabs ul.tabs.wc-tabs li.active a:hover, .woocommerce-message a.button:hover, .woocommerce a.button.wc-backward:hover' +
				'{	' +
				'-webkit-box-shadow: 0 14px 26px -12px' + accentColorVariation3 + ',0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px ' + accentColorVariation2 + '!important;' +
				'box-shadow: 0 14px 26px -12px ' + accentColorVariation3 + ',0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px ' + accentColorVariation2 + '!important;'+
				'}	';

			style += '.form-group.is-focused .form-control {'+
				'background-image: -webkit-gradient(linear,left top, left bottom,from(' + newval + '),to(' + newval + ')),-webkit-gradient(linear,left top, left bottom,from(#d2d2d2),to(#d2d2d2));'+
				'background-image: -webkit-linear-gradient(' + newval + '),to(' + newval + '),-webkit-linear-gradient(#d2d2d2,#d2d2d2);'+
				'background-image: linear-gradient(' + newval + '),to(' + newval + '),linear-gradient(#d2d2d2,#d2d2d2);'+
			'}';

			style += '</style>';
			el =  $( '.hover-styles' ); // look for a matching style element that might already be there
			if ( el.length ) {
				el.replaceWith( style ); // style element already exists, so replace it
			} else {
				$( 'head' ).append( style ); // style element doesn't exist so add it
			}
		} );
	} );

	// Colors > Secondary Color
	wp.customize( 'secondary_color', function( value ) {
		value.bind( function( newval ) {
			$('.main .title, .main .title a, .card-title,.card-title a, .info-title, .info-title a, .footer-brand, .footer-brand a, .media .media-heading, .media .media-heading a, .hestia-info .info-title, .card-blog a.moretag, .card .author a, aside .widget h5, aside .widget a, .hestia-about:not(.section-image) h1, .hestia-about:not(.section-image) h2, .hestia-about:not(.section-image) h3, .hestia-about:not(.section-image) h4, .hestia-about:not(.section-image) h5').css('color', newval);
			$('.section-image .title, .section-image .card-plain .card-title, .card [class*="header-"] .card-title, .contactus .hestia-info .info-title, .hestia-work h4.card-title').css('color', '#fff');
		});
	});

	// Colors > Body Color
	wp.customize( 'body_color', function( value ) {
		value.bind( function( newval ) {
			$('.description, .card-description, .footer-big, .hestia-features .hestia-info p, .text-gray, .card-description p, .hestia-about:not(.section-image) p, .hestia-about:not(.section-image) h6').css('color', newval);
			$('.contactus .description').css('color', '#fff');
		});
	});

	// Colors > Header/Slider Text Color
	wp.customize( 'header_text_color', function( value ) {
		value.bind( function( newval ) {
			$('.page-header .title, .page-header h4, .page-header').css('color', newval);
		});
	});

	function convertHex(hex,opacity){
		hex = hex.replace('#','');
		var r = parseInt(hex.substring(0,2), 16);
		var g = parseInt(hex.substring(2,4), 16);
		var b = parseInt(hex.substring(4,6), 16);

		var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
		return result;
	}

} )( jQuery );
