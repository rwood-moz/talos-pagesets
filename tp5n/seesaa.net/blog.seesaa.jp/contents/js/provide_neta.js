function ProvideNetaCategory(name, label, selected) {
   this.name     = name;
   this.label    = label;
   this.selected = selected;
   this.data     = null;
}

ProvideNetaCategory.prototype.createTabElement = function(){
   var link = $('<a>').attr('href', '#').text(this.label);
   if (this.selected)
      link.addClass('gray2TabOn');
   else
      link.addClass('gray2Tab');
   var category = this;
   link.bind('click', function(e) {
      seesaaProvideNetaCanvas.switchTo(category.name);
      return false;
   });

   return link;
}

ProvideNetaCategory.prototype.createImgItemElement = function() {
   var imgBox = $('<div>').addClass('pb10 pl10 clearfix');
   if (imageItems = this.data.imageItems) {
      for (var i=0; i < imageItems.length; i++) {//>
         var div;
         if (i == 5)
            div = $('<div>').addClass('imgLst5 mr0').appendTo(imgBox);
         else
            div = $('<div>').addClass('imgLst5').appendTo(imgBox);

         var link = $('<a>').attr({
            'href': imageItems[i].link,
            'title' : imageItems[i].title
         }).appendTo(div);
         var img = $('<img>').attr({
            'src' : imageItems[i].src,
            'width' :  85,
            'height' : 85
         }).appendTo(link);
      }
   }
   return imgBox;
}

ProvideNetaCategory.prototype.createTextItemElement = function() {

   var textBox = $('<div>').addClass('pb20 pl10 clearfix');
   var textBoxL = $('<div>').addClass('fleft w300').appendTo(textBox);
   var textItemL;
   if (textItemsL = this.data.textItemsL) {
      var div = $('<div>').appendTo(textBoxL);
      for (var i=0; i < textItemsL.length; i++) {
         var link = $('<a>').attr('href', textItemsL[i].link).appendTo(div);
         link.text(textItemsL[i].title);
         $('<br>').appendTo(div);
      }
   }

   var textBoxR = $('<div>').addClass('fright w300').appendTo(textBox);
   if (textItemsR = this.data.textItemsR) {
      var div = $('<div>').appendTo(textBoxR);
      for (var i=0; i < textItemsR.length; i++) {
         var link = $('<a>').attr('href', textItemsR[i].link).appendTo(div);
         link.text(textItemsR[i].title);
         $('<br>').appendTo(div);
      }
   }

   var more = $('<div>').addClass('right mr10 both').appendTo(textBox);
   var moreLink;
   if (this.name == 'index')
      moreLink = '/contents/provide/';
   else 
      moreLink = '/contents/provide/' + this.name + '/';
   $('<a>').addClass('moreLnk').attr('href', moreLink).appendTo(more).text('もっと見る');

   return textBox;
}

function ProvideNetaCanvas(categories) {
   this.categories = categories;
}

ProvideNetaCanvas.prototype.switchTo = function(category_name) {
   for (var i = 0; i<this.categories.length; i++) {//>
      var category = this.categories[i];
      if (category.name == category_name) {
         category.selected = true;
      }
      else if (category.selected){
         category.selected = false;
      }
   }

   this.updateNavi();
   this.updateItem();
}

ProvideNetaCanvas.prototype.updateNavi = function() {
   var navi = $('#provide_neta_category').empty();
   for (var i = 0; i<this.categories.length; i++) {//>
      navi.append(this.categories[i].createTabElement());
   }
}

ProvideNetaCanvas.prototype.updateItem = function() {
   var category = this.selectedCategory();
   var data = category.data;
   if (data) {
      var itemBox = $('#provide_neta_item').empty();
      if (data.imageItems)
         itemBox.append(category.createImgItemElement());
         itemBox.append(category.createTextItemElement());

      } else {
         var handleSuccess = function(responseText) {
         var data = parseJSON(responseText);
         category.data = data;
         var itemBox = $('#provide_neta_item').empty();
         if (data.imageItems)
            itemBox.append(category.createImgItemElement());
            itemBox.append(category.createTextItemElement());
      };

      var url = '/contents/js/provide/' + category.name + '_json.js';
      $.get(url, null, handleSuccess, 'html');
   }
}

ProvideNetaCanvas.prototype.selectedCategory = function() {
   var navi = $('#provide_neta_category')

   for (var i = 0; i < this.categories.length; i++) {//>
      var category = this.categories[i];
      if (category.selected) return category;
   }
}

var seesaaProvideNetaCanvas;
$(document).ready(function(){
   var categories = [
      new ProvideNetaCategory('index', '新着', false),
      new ProvideNetaCategory('sports', 'スポーツ', false),
      new ProvideNetaCategory('enta', 'エンタメ', false),
      new ProvideNetaCategory('business', '経済・IT', false),
      new ProvideNetaCategory('politics', '政治', false),
      new ProvideNetaCategory('music', '音楽', false),
      new ProvideNetaCategory('popular', '人気の記事', false),
      new ProvideNetaCategory('kizasi', 'ブログネタ', false)
//      new ProvideNetaCategory('goo_ranking', 'gooランキング', false)
   ];
   seesaaProvideNetaCanvas = new ProvideNetaCanvas(categories);
   seesaaProvideNetaCanvas.switchTo('index');
});
