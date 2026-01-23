function processAndRedirect() {
    const text = document.getElementById('userInput').value;
    
    // 1. Create the BBCode (e.g., [b]text[/b])
    const bbCode = `[b]${text}[/b]`;
    
    // 2. Show it on screen (optional)
    document.getElementById('display').innerText = bbCode;

    // 3. Redirect to the target site
    // You can append the text as a URL parameter if the target site supports it
    const targetUrl = "https://example.com/post?content=" + encodeURIComponent(bbCode);
    
    window.location.href = targetUrl;
}
