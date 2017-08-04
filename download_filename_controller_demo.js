console.log(item.url)
console.log(item.filename)
// http://developer.chrome.com/extensions/downloads.html#type-DownloadItem
// http://developer.chrome.com/extensions/downloads.html#type-FilenameConflictAction
ran = Math.random().toString().slice(2)
fname = item.filename.slice(0,-5)+ran+ item.filename.slice(-5)
suggest(fname, 'uniquify')