window.onload = function() {
	$(document).trigger('pageloaded');
}

if (typeof console == "undefined") {
    this.console = {log: function() {}};
}
