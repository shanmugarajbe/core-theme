define(["modules/jquery-mozu","shim!vendor/underscore>_","modules/api","modules/backbone-mozu","shim!vendor/jquery.colorbox-min[jquery=jQuery]>jQuery"],function(e){e("[data-mz-cms-image]").each(function(i,m){m=e(m);var o=m.data("mzCmsImage"),r="#";o&&"lightbox"===o.imageClickAction&&(r="file"===o.imageSource?"/cms/files/"+o.imageFileId:o.imageExternalUrl,m.click(function(i){i.preventDefault(),e.colorbox({html:['<img src="',r,'"</img>'].join("")})}))})});