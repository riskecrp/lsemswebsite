function generateBB() {
    const fName = document.getElementById('1_1_fname').value;
    const lName = document.getElementById('1_1_lname').value;
    const gender = document.getElementById('1_2_gender').value;

    const bbCode = `[img]https://i.imgur.com/a32OdzR.png[/img]
[lsemssubtitle]SECTION 1 - PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1) Name[/b]
[list=none]
Title: ${document.getElementById('1_1_title').value}
First Name: ${fName}
Last Name: ${lName}
[/list]

[b]1.2) Gender:[/b]
[list=none]
[${gender === 'Female' ? 'X' : ' '}] Female
[${gender === 'Male' ? 'X' : ' '}] Male
[${gender === 'Other' ? 'X' : ' '}] Other
[/list]

[b]1.3) Date & Place of Birth[/b]
[list=none]
Place: ${document.getElementById('1_3_pob').value}
Date: ${document.getElementById('1_3_dob').value}
[/list]

[b]1.7) Identification:[/b]
[list=none]
[URL=${document.getElementById('1_7_link').value}]Attached Documents[/URL]
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    // Robust Fallback Copy Method
    const textArea = document.createElement("textarea");
    textArea.value = bbCode;
    textArea.style.position = "fixed"; 
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        alert("BBCode Copied!\n\nSubject Title: LSEMS Application - " + fName + " " + lName);
    } catch (err) {
        alert("Copy failed. Please manually copy the code from the console (F12).");
    }

    document.body.removeChild(textArea);
    window.open("https://gov.eclipse-rp.net/viewforum.php?f=575", "_blank");
}
