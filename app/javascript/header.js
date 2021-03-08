window.addEventListener('load', function(){
  const pullDownButton = document.getElementById("worklists")
  const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('mouseover', function(){
    console.log("mouseover OK")
    pullDownParents.setAttribute("style", "display:block;")
  })
  
  pullDownButton.addEventListener('mouseout', function(){
    console.log("mouseout OK")
    pullDownParents.removeAttribute("style", "display:block;")
  })
  
})