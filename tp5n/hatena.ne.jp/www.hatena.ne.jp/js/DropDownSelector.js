// require Ten.js
if (typeof Hatena == 'undefined')
    var Hatena = {};

Hatena.DropDownSelector = new Ten.Class({
    initialize: function(options) {
        Ten.EventDispatcher.implementEventDispatcher(this);
        options = options || {};
        this.selectedKey = options.selectedKey || '';
        this.showEvent   = options.showEvent   || 'onclick';
        this.hideEvent   = options.hideEvent   || 'onclick';
        this.itemEvent   = options.itemEvent   || 'onclick';
        this.data        = options.data || [];
        if (options.button)   this.registButtonElement(options.button);
        if (options.onclick)  this.addOnClickListener(options.onclick);
        this.createElements();
    }
}, {
    registButtonElement: function(element) {
        if (!this.button && element) {
            this.button = element;
        }
        this.buttonClick = new Ten.Observer(this.button, this.showEvent, this, 'show');
    },
    addOnClickListener: function(meth) {
        this.addEventListener('select', meth);
    },
    createElements: function() {
        this.ul = Ten.Element('ul', {
            className: 'dropdown-list',
            style:{zIndex: 99999, position: 'absolute', display: 'none'}
        });
        for (var i = 0; i < this.data.length; i++) {
            var dropdownName = 'dropdown' + (this.data[i].key ? '-' + this.data[i].key : '') + (this.selectedKey == this.data[i].key ? ' selected' : '');
            var li = Ten.Element('li', {
                className: dropdownName,
                onclick: this.onSelect(this.data[i].key)},
                Ten.Element('a',{ href: '' }, this.data[i].name)
            );
            this.ul.appendChild(li);
            this._data[this.data[i].key] = li;
        }
    },
    show: function(e) {
        if (e && e.stop) e.stop();
        document.body.appendChild(this.ul);
        this.ul.style.display = 'block';
        this.setPosition();
        this.bodyClick   = new Ten.Observer(document.body, this.hideEvent, this, 'hide');
        this.onresize    = new Ten.Observer(window, 'onresize', this, 'setPosition');
        this.ulMouseOut  = new Ten.Observer(this.ul, 'onmouseover', this, 'clearHideTimer');
        this.ulMouseOver = new Ten.Observer(this.ul, 'onmouseout',  this, 'setHideTimer');
        
        this.buttonClick.stop();
        delete this.buttonClick;
        this.buttonClick = new Ten.Observer(this.button, this.showEvent, this, 'hide');
    },
    hide: function(e) {
        if (e && e.stop) e.stop();
        this.ul.style.display = 'none';
        this.bodyClick.stop();
        this.onresize.stop();
        this.ulMouseOut.stop();
        this.ulMouseOver.stop();
        delete this.bodyClick;
        delete this.onresize;
        delete this.ulMouseOut;
        delete this.ulMouseOver;

        this.buttonClick.stop();
        delete this.buttonClick;
        this.buttonClick = new Ten.Observer(this.button, this.showEvent, this, 'show');
        this.clearHideTimer();
    },
    setHideTimer: function(e) {
        var t = e.event.relatedTarget || e.event.toElement;
        do { if (t == this.ul) return; } while (t = t.parentNode);
        if (!this.hideTimer) {
            var self = this;
            this.hideTimer = setTimeout(
                function() {
                    self.hide();
                }
            , 1000);
        }
    },
    clearHideTimer: function(e) {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            delete this.hideTimer;
        }
    },
    setPosition: function() {
        var p = Ten.Geometry.getElementPosition(this.button);
        var x;
        //if (p.x + this.ul.offsetWidth > Ten.Geometry.getWindowSize().w) {
            x = p.x - this.ul.offsetWidth + this.button.offsetWidth;
        //}
        this.ul.style.top  = p.y + this.button.offsetHeight + 'px';
        this.ul.style.left = x + 'px';
    },
    onSelect: function(item) {
        var self = this;
        return function(e) {
            e.stop();
            self.dispatchEvent('select', item);
            var li = self.ul.getElementsByTagName('li');
            for (var i = 0; i < li.length; i++) {
                if (Ten.DOM.hasClassName(li[i], 'selected')) {
                    Ten.DOM.removeClassName(li[i], 'selected');
                }
            }
            if (self._data[item]) {
                Ten.DOM.addClassName(self._data[item], 'selected');
            }
        };
    },
    _data: {}
});
