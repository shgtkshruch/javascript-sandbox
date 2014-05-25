###
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
###

hoge = ->
  console.log 'hoge'

hoge.call window # hoge



hoge = (str) ->
  console.log str

hoge.call window, 'fuga' # fuga
# hoge.call null, 'fuga' # fuga



# Function
hoge = ->
  console.log @

hoge() # window

# Object
hoge = 
  echo: ->
    console.log @

hoge.echo() # hoge object

# Class
Hoge = ->
Hoge::echo = ->
  console.log @

h = new Hoge()
h.echo() # Hoge class



Hoge = ->
Hoge::echo = ->
  console.log 'hoge'
Hoge::instance = ->
  console.log @

Fuga = ->

h = new Hoge()
f = new Fuga()

h.echo() # hoge
h.instance() # Hoge
# f.echo() # TypeError: undefined is not a function
h.echo.call(f) # hoge
h.instance.call(f) # Fuga(fを主体にしてhのメソッドを実行)



# よくあるcallメソッドの利用例
array_like_elements = document.getElementsByTagName('p')

# Array.prototypeを客体として指定して、
# メソッドを実行したい主体である、array_like_elementsでsliceメソッドを実行
elements = Array::slice.call(array_like_elements)

# sliceでコピーされた要素リストは、通常の配列になっているので、
# shiftで先頭の要素を取り出せる
console.log elements.shift() # first p
console.log elements.shift() # second p
