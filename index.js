function getFirstSelector(selector){
  var selected = document.querySelector(selector)
  return selected
}

function nestedTarget(){
  var target = document.querySelector("#nested .target")
  return target
}


function increaseRankBy(n){
  var target = document.querySelectorAll(".ranked-list")
  var int = ""
  for (var i = 0; i < target.length; i++) {
    int = parseInt(target[i].innerHTML)
    target[i].innerHTML = (int + n).toString()
  }
  return target
}

function deepestChild(){
  var selector = document.querySelector("div#grand-node")
  var next = []
  for (var i = 0; i < selector.length; i++) {
      next = document.querySelector(selector[i])
  }
  return selector
}
