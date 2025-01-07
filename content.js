// Function to get main content and exclude navigation, footers, etc.
function getMainContent() {
    // Try to find main content using common selectors
    const contentSelectors = [
        'article',
        '[role="main"]',
        'main',
        '.post-content',
        '.article-content',
        '.content'
    ];

    for (const selector of contentSelectors) {
        const element = document.querySelector(selector);
        if (element) {
            return element.textContent;
        }
    }

    // Fallback to body content if no main content is found
    return document.body.textContent;
}

// Calculate reading time
function calculateReadingTime() {
    const content = getMainContent();
    const words = content.trim().split(/\s+/).length;
    const wordsPerMinute = 200; // Average reading speed
    const readingTime = Math.ceil(words / wordsPerMinute);
    
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollProgress = (scrollPosition / scrollHeight) * 100;

    return {
        words: words,
        minutes: readingTime,
        progress: scrollProgress
    };
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getReadingTime") {
        sendResponse(calculateReadingTime());
    }
});