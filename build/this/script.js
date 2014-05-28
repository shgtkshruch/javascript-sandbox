
/*
これでできる！ クロスブラウザJavaScript入門
第16回　JavaScriptのthisとcall
http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0016
 */

(function() {
  var A, a, a_logThis;

  A = function(name) {
    return this.name = name;
  };

  A.prototype.logThis = function() {
    return console.log(this);
  };

  a = new A('aaa');

  a_logThis = a.logThis;


  /*
  呼び出した関数の手前（ドットの前）のオブジェクトがthisになる。
  ただし，手前にドットがない場合はグローバルオブジェクトがthisになる
   */

  a.logThis();

  a_logThis();

  a_logThis.call(a);

}).call(this);
