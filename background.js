chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://five.me/')) {
      chrome.tabs.executeScript(tabId, {file: "content.js"});
    }
  });
  