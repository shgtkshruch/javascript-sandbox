
/*
applyとcallの使い方を丁寧に説明してみる - あと味
http://taiju.hatenablog.com/entry/20100515/1273903873

--- Summary ---
callメソッドは、Array.prototypeに定義されている便利メソッドを他のオブジェクトでも使いたいときに便利。
apply/callメソッドは、JavaScriptに「おまえのものはおれのもの、おれのものもおれのもの」というジャイアニズムを実現するための素晴らしいメソッド

- normal
objA.method() # 主体.method()

- call
objA.method.call(objB) # 客体.methodA.call(主体)
objectAのmethodをObjectBを主体にして実行
 */

(function() {
  var Fuga, Hoge, array_like_elements, elements, f, h, hoge;

  hoge = function() {
    return console.log('hoge');
  };

  hoge.call(window);

  hoge = function(str) {
    return console.log(str);
  };

  hoge.call(window, 'fuga');

  hoge = function() {
    return console.log(this);
  };

  hoge();

  hoge = {
    echo: function() {
      return console.log(this);
    }
  };

  hoge.echo();

  Hoge = function() {};

  Hoge.prototype.echo = function() {
    return console.log(this);
  };

  h = new Hoge();

  h.echo();

  Hoge = function() {};

  Hoge.prototype.echo = function() {
    return console.log('hoge');
  };

  Hoge.prototype.instance = function() {
    return console.log(this);
  };

  Fuga = function() {};

  h = new Hoge();

  f = new Fuga();

  h.echo();

  h.instance();

  h.echo.call(f);

  h.instance.call(f);

  array_like_elements = document.getElementsByTagName('p');

  elements = Array.prototype.slice.call(array_like_elements);

  console.log(elements.shift());

  console.log(elements.shift());

}).call(this);
