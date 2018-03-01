export function forceReloadWindow() {
    window.onbeforeunload = function () {};
    window.location.reload();
}