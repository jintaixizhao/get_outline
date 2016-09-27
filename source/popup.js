chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: '[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})'
  });
});