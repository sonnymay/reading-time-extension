# Reading Time Estimator Chrome Extension

A Chrome extension that estimates reading time for articles and web pages.

## Features

- Estimates reading time based on word count and average reading speed
- Displays total word count of the content
- Shows reading progress as you scroll through the page
- Works on any webpage
- Clean, minimal interface

## Installation

1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How to Use

1. Click the extension icon in your Chrome toolbar
2. The popup will show:
   - Estimated reading time in minutes
   - Total word count
   - Reading progress bar

## Technical Details

- Built with vanilla JavaScript
- Uses Chrome Extension Manifest V3
- Calculates reading time based on 200 words per minute average reading speed
- Automatically detects main content area using common article selectors

## File Structure

```
reading-time-extension/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
└── icon.svg
```

## Development

To modify the extension:

1. Make your changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
