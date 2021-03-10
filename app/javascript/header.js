window.addEventListener('load', function(){
  const pullDownWork = document.getElementById("worklists")
  const pullDownTravel = document.getElementById("travellists")
  const pullDownParentsWork = document.getElementById("pull-down-work")
  const pullDownParentsTravel = document.getElementById("pull-down-travel")


  pullDownWork.addEventListener('click', function() {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParentsWork.getAttribute("style") == "display:block;") {
      pullDownParentsWork.removeAttribute("style", "display:block;")
    } else {
      pullDownParentsWork.setAttribute("style", "display:block;")
    }
  })

  pullDownTravel.addEventListener('click', function() {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParentsTravel.getAttribute("style") == "display:block;") {
      pullDownParentsTravel.removeAttribute("style", "display:block;")
    } else {
      pullDownParentsTravel.setAttribute("style", "display:block;")
    }
  })
  
})