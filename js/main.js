var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    // common launch function
    function launch(page, n, w, h, s, r) {
        var mytop = Math.floor((screen.height / 2) - (h / 2));
        var myleft = Math.floor((screen.width / 2) - (w / 2));
        settings = 'height=' + h + ',width=' + w + ',top=' + mytop + ',left=' + myleft + ',scrollbars=' + s + ',resizable=' + r + '';
        window.open(page, n, settings);
    }
    function launchNormal(page, n, w, h) {
        var mytop = Math.floor((screen.height / 2) - (h / 2));
        var myleft = Math.floor((screen.width / 2) - (w / 2));
        settings = 'height=' + h + ',width=' + w + ',top=' + mytop + ',left=' + myleft + ',toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes';
        window.open(page, n, settings);
    }


}