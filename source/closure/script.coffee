###
but example

window.onload = ->
  table = document.getElementById 'js-table'
  trs = table.getElementsByTagName 'tr'
  for i in [0...trs.length]
    tr = trs[i]
    tr.onmouseover = ->
      tr.className = 'hover'
    tr.onmouseout = ->
      tr.className = ''
###



###
Closure

window.onload = ->
  table = document.getElementById 'js-table'
  trs = table.getElementsByTagName 'tr'
  for i in [0...trs.length]
    tr = trs[i]
    ((_tr) ->
      _tr.onmouseover = ->
        _tr.className = 'hover'
      _tr.onmouseout = ->
        _tr.className = ''
    ) tr
###



###
this
###

window.onload = ->
  table = document.getElementById 'js-table'
  trs = table.getElementsByTagName 'tr'
  for i in [0...trs.length]
    tr = trs[i]
    tr.onmouseover = ->
      @className = 'hover'
    tr.onmouseout = ->
      @className = ''
