function submitApp() {
    const name = document.getElementById('charName').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;

    // The BBCode template
    const bbCode = `[center][b]DEPARTMENT APPLICATION[/b][/center]\n[b]Name:[/b] ${name}\n[b]Phone:[/b] ${phone}\n[b]Statement:[/b]\n${reason}`;

    // 1. Copy to clipboard
    navigator.clipboard.writeText(bbCode);
    alert("BBCode copied! Now paste it on the forum.");

    // 2. Open the forum in a NEW TAB
    window.open("https://gov.eclipse-rp.net/posting.php?mode=reply&t=106953", "_blank");
}
