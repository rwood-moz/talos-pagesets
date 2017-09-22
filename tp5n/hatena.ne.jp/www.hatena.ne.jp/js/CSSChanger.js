// require Ten.js
if (typeof Hatena == 'undefined')
    var Hatena = { };

Hatena.CSSChanger = new Ten.Class({
    DOMAIN: undefined,
    COOKIE_KEY: '_hatena_csschanger_name',

    cssFiles: { },
    registerFiles: function(files) {
        for(var i=0; i<files.length; i++) {
            if(files[i].key && files[i].src) {
                this.cssFiles[files[i].key] = files[i].src;
            }
        }
    },
    init: function() {
        var name = this.getColorName();
        if (this.cssFiles[name]) {
            var self = this;
            void('<link rel="stylesheet" href="' + this.cssFiles[name] + '" title="' + name + '" />');
            Ten.DOM.addEventListener( 'DOMContentLoaded', 
                function() {
                    self.replaceDefault()
                }
            );
        }
    },
    change: function(name) {
        if (name && !(name in this.cssFiles))
            return;

        var found = false;
        var links = document.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
            if ((links[i].getAttribute('rel') || '').toLowerCase() != 'stylesheet')
                continue;
            var title = links[i].getAttribute('title');
            if (!title)
                continue;
            if (title == name) {
                found = true;
                links[i].disabled = false;
            } else {
                links[i].disabled = true;
            }
        }
        if (name && !found) {
            var link = Ten.Element('link', { href: this.cssFiles[name], title: name, rel: 'stylesheet' });
            document.getElementsByTagName('head')[0].appendChild(link);
            link.disabled = false;
        }

        this.changeImages(name);
        this.setColorName(name);
        this.dispatchEvent('change', name);
    },
    changeImages: function(name) {
        var change = function (elems) {
            for (var i = 0; i < elems.length; i++) {
                if ((' ' + elems[i].className + ' ').indexOf(' csschanger ') > -1) {
                    elems[i].src = elems[i].src.replace(/(?:-..)?(\.\w+)$/, (name ? '-' + name : '') + '$1');
                }
            }
        }
        change(document.getElementsByTagName('img'));
        change(document.getElementsByTagName('input'));
        this.dispatchEvent('change-images', name);
    },
    replaceDefault: function () {
        var name = this.getColorName();
        if (this.cssFiles[name]) this.changeImages(name)
    },
    getColorName: function () {
        this.cookie = this.cookie || new Ten.Cookie;
        if(!this.cookie.has(this.COOKIE_KEY)) return null;
        return this.cookie.get(this.COOKIE_KEY);
    }, 
    setColorName: function (name) {
        this.cookie = this.cookie || new Ten.Cookie;
        this.cookie.set(this.COOKIE_KEY, name, { domain: this.DOMAIN, expires: '+1y' });
    }
});
Ten.EventDispatcher.implementEventDispatcher(Hatena.CSSChanger);

// Site specific
Hatena.CSSChanger.DOMAIN = '.hatena.ne.jp';
Hatena.CSSChanger.COOKIE_KEY = '_hatena_portal_csschanger_name';
