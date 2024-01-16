chrome.runtime.onInstalled.addListener(function () {
  console.log("MD Formatter extension installed!");
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "formatMD") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      const mdText = `[${tab.title}](${tab.url})`;
      copyToClipboard(mdText);
      window.alert("MD format copied to clipboard!");
      // showNotification("MD format copied to clipboard!");
    });
  }
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
