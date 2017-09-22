jQuery("#quicklinks_select").change(function() {
    var v = this.options[this.selectedIndex].value;
    if (v) {
        var i = new Image();
        var picked = jQuery(this.options[this.selectedIndex]);
        var tag = picked.attr("datatag");
        var slot = picked.attr("dataslot");
        i.src = '/rg/' + tag + '/' + slot + '/images/b.gif';
        document.location = v;
    }
} )
