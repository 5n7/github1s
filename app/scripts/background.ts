const validUrlRegex = "^https://github.com/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]+.*"

const isValidUrl = (url: string): boolean => {
  return url.match(validUrlRegex) !== null
}

const openGitHub1s = () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const url = tabs[0].url
    if (url === undefined || !isValidUrl(url)) {
      return
    }

    const url1s = url.replace("github.com", "github1s.com")
    chrome.tabs.create({ url: url1s })
  })
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Open with GitHub1s",
  })
})

chrome.contextMenus.onClicked.addListener(() => {
  openGitHub1s()
})
