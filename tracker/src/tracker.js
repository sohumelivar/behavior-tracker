// ------------------------------------------------------- //

document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-track-click]');
    if (!element) return;
    const eventName = element.dataset.trackClick;
    console.log("eventName", eventName);
});

// ------------------------------------------------------- //

document.addEventListener('mouseover', (event) => {
    const element = event.target.closest('[data-track-hover]');
    if (!element) return;
    console.log('hover start');
});

// ------------------------------------------------------- //

const hoverTimers = new Map();

document.addEventListener('mouseover', (event) => {
    const element = event.target.closest('[data-track-hover]');
    if (!element) return;
    const fromElement = event.relatedTarget;
    if (element.contains(fromElement)) return;
    if (hoverTimers.has(element)) return;
    hoverTimers.set(element, Date.now());
    console.log('hover started:', element.dataset.trackHover);
});

document.addEventListener('mouseout', (event) => {
    const element = event.target.closest('[data-track-hover]');
    if (!element) return;
    const toElement = event.relatedTarget;
    if (element.contains(toElement)) return;
    const startedAt = hoverTimers.get(element);
    if (!startedAt) return;
    const duration = Date.now() - startedAt;
    console.log('hover ended:', element.dataset.trackHover);
    console.log('duration:', duration, 'ms');
    hoverTimers.delete(element);
});

// ------------------------------------------------------- //

