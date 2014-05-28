###
これでできる！ クロスブラウザJavaScript入門
第16回　JavaScriptのthisとcall
http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0016
###

A = (name) ->
  @name = name
A::logThis = ->
  console.log @

a = new A 'aaa'
a_logThis = a.logThis

###
呼び出した関数の手前（ドットの前）のオブジェクトがthisになる。
ただし，手前にドットがない場合はグローバルオブジェクトがthisになる
###
a.logThis() # A
a_logThis() # window
a_logThis.call a # A
