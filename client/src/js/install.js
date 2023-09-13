const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  // TODO: Implement a click event handler on the `butInstall` element
  butInstall.addEventListener("click", () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed";
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA was installed", event);
});
