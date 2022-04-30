export default function autotrack() {
	require('autotrack/lib/plugins/event-tracker');
	require('autotrack/lib/plugins/outbound-link-tracker');
	require('autotrack/lib/plugins/outbound-form-tracker');
	require('autotrack/lib/plugins/download-link-tracker');

	(function(i, s, o, g, r, a, m) {
		i.GoogleAnalyticsObject = r;
		(i[r] =
			i[r] ||
			function() {
				(i[r].q = i[r].q || []).push(arguments);
			}),
			(i[r].l = 1 * new Date());
		(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m);
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-59947828-1', 'hosted.bmj.com');

	ga('require', 'outboundFormTracker');
	ga('require', 'outboundLinkTracker');
	ga('require', 'downloadLinkTracker');
	ga('require', 'eventTracker', {
		attributePrefix: 'data-',
	});

	ga('send', 'pageview');
}