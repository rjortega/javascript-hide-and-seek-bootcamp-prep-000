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
  var element = document.querySelector("div#grand-node")
  var current = element.children
  var next = []
  while (current.length > 0) {
      for (var i = 0; i < current.length; i++) {
        console.log('current', current)
        next = next.concat(current[i].children)
        console.warn("inside", next);
      }
      current = next
  }

}
