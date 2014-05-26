
/*
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
 */


/*
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
 */


/*
this
 */

(function() {
  window.onload = function() {
    var i, table, tr, trs, _i, _ref, _results;
    table = document.getElementById('js-table');
    trs = table.getElementsByTagName('tr');
    _results = [];
    for (i = _i = 0, _ref = trs.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      tr = trs[i];
      tr.onmouseover = function() {
        return this.className = 'hover';
      };
      _results.push(tr.onmouseout = function() {
        return this.className = '';
      });
    }
    return _results;
  };

}).call(this);
