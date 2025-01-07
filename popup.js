// Update the UI with reading time information
function updateUI(data) {
    const timeElement = document.getElementById('time');
    const wordCountElement = document.getElementById('wordCount');
    const progressBar = document.getElementById('readingProgress');

    // Update reading time
    timeElement.textContent = `${data.minutes} min read`;
    
    // Update word count
    wordCountElement.textContent = data.words.toLocaleString();
    
    // Update progress bar
    progressBar.style.width = `${data.progress}%`;
}

// Get the active tab and request reading time
async function getReadingTime() {
    try {
        // Get the active tab
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // Send message to content script
        const response = await chrome.tabs.sendMessage(tab.id, { action: "getReadingTime" });
        
        // Update the popup with the response
        updateUI(response);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('time').textContent = 'Error calculating reading time';
    }
}

// Initialize when popup opens
document.addEventListener('DOMContentLoaded', getReadingTime);