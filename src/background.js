console.log("Background script")

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.query(
        { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
        function(tabs) {
          const { id: tabId } = tabs[0].url;
      
          let code = `
            (
                function() {
                    let result = document.querySelector('.challenges-list');

                    let item = result.children[Math.floor(Math.random()*result.children.length)];
                    
                    return item.href;
                }
            )();
         `;
      
          chrome.tabs.executeScript(tabId, { code }, function (result) {
            chrome.tabs.create({'url': result[0]});                         
          });
        }
      );
      
}) 