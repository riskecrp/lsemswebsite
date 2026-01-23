function generateBBCode() {
    const gender = document.getElementById('gender').value;
    const ai = document.getElementById('aiConfirm').value;

    const bbCode = `[img]https://i.imgur.com/a32OdzR.png[/img]
[lsemssubtitle]SECTION 1 - PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1) Name[/b]
[list=none]
Title: ${document.getElementById('title').value}
First Name: ${document.getElementById('fName').value}
Last Name: ${document.getElementById('lName').value}
[/list]

[b]1.2) Gender:[/b]
[list=none]
[${gender === 'Female' ? 'X' : ' '}] Female
[${gender === 'Male' ? 'X' : ' '}] Male
[${gender === 'Other' ? 'X' : ' '}] Other
[/list]

[b]1.3) Date & Place of Birth [/b]
[list=none]
Place: ${document.getElementById('pob').value}
Date: ${document.getElementById('dob').value}
[/list]

[b]1.6) Convictions:[/b]
[list=none]
${document.getElementById('crimRecord').value}
[/list]

[b]1.7) ID & License:[/b]
[list=none]
[URL=${document.getElementById('idLink').value}]Attached Documents[/URL]
[/list]
[/divbox]

[lsemssubtitle]SECTION 3 - GENERAL QUESTIONS[/lsemssubtitle]
[divbox=white]
[b]3.1 Motivation:[/b]
[list=none]
${document.getElementById('motivation').value}
[/list]
[/divbox]

[lsemssubtitle](( SECTION 4 - OOC INFORMATION ))[/lsemssubtitle]
[divbox=white]
[b]4.1) Player Information[/b]
[list=none]
Discord Username: ${document.getElementById('discord').value}
[/list]

[b]4.10) AI Confirmation:[/b]
[list=none]
[${ai === 'Yes' ? 'X' : ' '}] Yes, I do.
[${ai === 'AI' ? 'X' : ' '}] I utilized AI-based text generators.
[${ai === 'Grammar' ? 'X' : ' '}] I utilized Grammar-assist software.
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    navigator.clipboard.writeText(bbCode).then(() => {
        alert("BBCode Copied!");
        window.open("https://gov.eclipse-rp.net/posting.php?mode=post&f=575", "_blank");
    });
}
