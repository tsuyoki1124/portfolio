window.addEventListener('load', function(){
  const pullDownButton = document.getElementById("worklists")
  const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('click', function() {
    
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })
  
})