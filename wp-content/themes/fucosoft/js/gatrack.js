// Load the plugin.
ga('require', 'linker');
// Define which domains to autoLink.
ga('linker:autoLink', ['mycommerce.com']);
// Track Download
if (typeof jQuery != 'undefined') {
    jQuery(document).ready(function($) {
        var filetypes = /\.(zip|exe|dmg)$/i;
        var baseHref = '';
        if (jQuery('base').attr('href') != undefined)
            baseHref = jQuery('base').attr('href');
        jQuery('a').each(function() {
            var href = jQuery(this).attr('href');
			if (href && href.match(filetypes)) {
                jQuery(this).click(function() {
                    var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                    var filePath = href;
					ga('send', 'event', 'Downloads', filePath, document.location.pathname);
                                        ga('send', 'pageview', filePath);
							setTimeout(function() { location.href = baseHref + href; }, 200);
							return false;
				});
            }
        });
    });
}


// Track Comments
function disqus_config() {
    this.callbacks.onNewComment = [function(comment) {
     ga('send', 'event', 'Disqus New Comments', comment.id, document.location.pathname);
    }];
}