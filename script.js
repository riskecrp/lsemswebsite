function generateBBCode() {
    // Get values (Mapping just a few as examples, add the rest similarly)
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const gender = document.getElementById('gender').value;
    const motivation = document.getElementById('motivation').value;
    
    // Checkbox logic for Gender
    const maleX = gender === "Male" ? "X" : " ";
    const femaleX = gender === "Female" ? "X" : " ";
    const otherX = gender === "Other" ? "X" : " ";

    const bbCode = `[img]https://i.imgur.com/a32OdzR.png[/img]
[lsemssubtitle]SECTION 1 - PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1) Name[/b]
[list=none]
Title: ${document.getElementById('title').value}
First Name: ${fName}
Last Name: ${lName}
[/list]

[b]1.2) Gender - (use 'X' to select):[/b]
[list=none]
[${femaleX}] Female
[${maleX}] Male
[${otherX}] Other
[/list]

[b]1.3) Date & Place of Birth [/b]
[list=none]
Place: ${document.getElementById('pob').value}
Date: ${document.getElementById('dob').value}
[/list]

[b]1.5) Contact details[/b]
[list=none]
Phone Number: ${document.getElementById('phone').value}
[/list]

[b]1.7) Please provide proof of your identification and license.[/b]
[list=none]
[URL=${document.getElementById('idLink').value}]Attached Documents[/URL]
[/list]
[/divbox]

[lsemssubtitle]SECTION 3 - GENERAL QUESTIONS[/lsemssubtitle]
[divbox=white]
[b]3.1 Motivation behind joining?[/b]
[list=none]
${motivation}
[/list]
[/divbox]

[lsemssubtitle](( SECTION 4 - OOC INFORMATION ))[/lsemssubtitle]
[divbox=white]
[b]4.2) ECRP Forum Profile[/b]
[list=none]
Forum Profile Link: [url=${document.getElementById('forumLink').value}]Here[/url]
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    // Copy to clipboard
    navigator.clipboard.writeText(bbCode).then(() => {
        alert("Application BBCode Copied!");
        // Redirect to New Topic in the correct sub-forum
        window.open("https://gov.eclipse-rp.net/posting.php?mode=post&f=575", "_blank");
    });
}
