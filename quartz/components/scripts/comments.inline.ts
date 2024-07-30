
document.addEventListener("nav", () => {
  reloadScript()
})

export function reloadScript() {
  let giscusContainer = document.getElementById("giscus-container");
  if (giscusContainer) {
    giscusContainer.innerHTML = "";
  }

  const scriptElement = document.createElement('script');
  const colorScheme = localStorage.getItem('theme') === 'dark' ? 'cobalt' : 'light'
  
  // Set attributes for the script
  scriptElement.src = "https://giscus-seven.vercel.app/client.js";
  scriptElement.setAttribute('data-repo', "carson-bentley/frontend-tool-test2");
  scriptElement.setAttribute('data-repo-id', "R_kgDOMdB6LQ");
  scriptElement.setAttribute('data-category', "Announcements");
  scriptElement.setAttribute('data-category-id', "DIC_kwDOMdB6Lc4ChRuY");
  scriptElement.setAttribute('data-mapping', "pathname");
  scriptElement.setAttribute('data-strict', "0");
  scriptElement.setAttribute('data-reactions-enabled', "1");
  scriptElement.setAttribute('data-emit-metadata', "0");
  scriptElement.setAttribute('data-input-position', "bottom");
  scriptElement.setAttribute('data-theme', colorScheme);
  scriptElement.setAttribute('data-lang', "en");
  scriptElement.setAttribute('crossorigin', "anonymous")
  scriptElement.async = true;

  // Append the script element to the giscus-container

  if (giscusContainer) {
    giscusContainer.appendChild(scriptElement);
  } else {
    console.error("giscus-container not found. Script could not be appended.");
  }

}