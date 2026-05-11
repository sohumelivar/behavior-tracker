document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-track-click]');
    if (!element) return;
    const eventName = element.dataset.trackClick;
    console.log("eventName", eventName);
});
