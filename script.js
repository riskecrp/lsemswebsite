function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.menu-item');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    
    // Simple visual toggle for the active class on sidebar
    // Note: In this simple version, clicking recruitment is the main trigger
    if(tabName === 'recruitment') {
        buttons[0].classList.add('active');
    }
}

function generateRecruitmentBB() {
    // 1. Gather Data
    const title = document.getElementById('p_title').value;
    const fname = document.getElementById('p_fname').value;
    const lname = document.getElementById('p_lname').value;
    const gender = document.getElementById('p_gender').value;
    const speak = document.getElementById('e_speak').value;
    const write = document.getElementById('e_write').value;
    const mic = document.getElementById('o_mic').value;
    const other = document.getElementById('o_other').value;
    const ai = document.getElementById('o_ai').value;

    // 2. Build BBCode String
    const bbCode = `[img]https://i.imgur.com/a32OdzR.png[/img]
[lsemssubtitle]SECTION 1 - PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1) Name[/b]
[list=none]
Title: ${title}
First Name: ${fname}
Last Name: ${lname}
[/list]

[b]1.2) Gender - (use 'X' to select):[/b]
[list=none]
[${gender === 'Female' ? 'X' : ' '}] Female
[${gender === 'Male' ? 'X' : ' '}] Male
[${gender === 'Other' ? 'X' : ' '}] Other
[/list]

[b]1.3) Date & Place of Birth[/b]
[list=none]
Place: ${document.getElementById('p_pob').value}
Date: ${document.getElementById('p_dob').value}
[/list]

[b]1.4) Weight & Height[/b]
[list=none]
Weight: ${document.getElementById('p_weight').value}
Height: ${document.getElementById('p_height').value}
[/list]

[b]1.5) Contact details[/b]
[list=none]
Phone Number: ${document.getElementById('p_phone').value}
[/list]

[b]1.6) Convictions:[/b]
[list=none]
${document.getElementById('p_crim').value || 'No'}
[/list]

[b]1.6.1) Reformation Status:[/b]
[list=none]
${document.getElementById('p_ref').value || 'N/A'}
[/list]

[b]1.7) Identification:[/b]
[list=none]
[URL=${document.getElementById('p_id').value}]Attached Documents[/URL]
[/list]
[/divbox]

[lsemssubtitle]SECTION 2 - EXPERIENCES, PAST EMPLOYMENT, AND REFERENCES[/lsemssubtitle]
[divbox=white]
[b]2.1) Prior Qualifications:[/b]
[list=none]
${document.getElementById('e_quals').value}
[/list]

[b]2.2) Employment History[/b]
[list=none]
Company Name: ${document.getElementById('e_co').value}
Employment Term: ${document.getElementById('e_term').value}
Title: ${document.getElementById('e_title').value}
Reason for Leaving: ${document.getElementById('e_reason').value}
Job Duties: ${document.getElementById('e_duties').value}
[/list]

[b]2.3) Speak English?:[/b]
[list=none]
[${speak === 'Yes' ? 'X' : ' '}] Yes
[${speak === 'No' ? 'X' : ' '}] No
[/list]

[b]2.4) Write English?:[/b]
[list=none]
[${write === 'Yes' ? 'X' : ' '}] Yes
[${write === 'No' ? 'X' : ' '}] No
[/list]

[b]2.5) Other Languages:[/b]
[list=none]
${document.getElementById('e_langs').value || 'None'}
[/list]
[/divbox]

[lsemssubtitle]SECTION 3 - GENERAL QUESTIONS[/lsemssubtitle]
[divbox=white]
[b]3.1 Motivation:[/b]
[list=none]
${document.getElementById('g_mot').value}
[/list]
[b]3.2) Candidate:[/b]
[list=none]
${document.getElementById('g_cand').value}
[/list]
[b]3.3) Improvement:[/b]
[list=none]
${document.getElementById('g_imp').value}
[/list]
[b]3.4) Bio:[/b]
[list=none]
${document.getElementById('g_bio').value}
[/list]
[/divbox]

[lsemssubtitle](( SECTION 4 - OOC INFORMATION ))[/lsemssubtitle]
[divbox=white]
[b]4.1) Player Information[/b]
[list=none]
Name/nickname: ${document.getElementById('o_nick').value}
Age: ${document.getElementById('o_age').value}
Country: ${document.getElementById('o_country').value}
Timezone: ${document.getElementById('o_tz').value}
Discord: ${document.getElementById('o_disc').value}
[/list]

[b]4.2) Forum Profile[/b]
[list=none]
Name: ${document.getElementById('o_fname').value}
Link: [url=${document.getElementById('o_flink').value}]Here[/url]
[/list]

[b]4.3) Admin Record:[/b]
[list=none]
[URL=${document.getElementById('o_admin').value}]Record[/URL]
[/list]

[b]4.4) Factions:[/b]
[list=none]
${document.getElementById('o_factions').value}
[/list]

[b]4.5) Exp:[/b]
[list=none]
${document.getElementById('o_exp').value}
[/list]

[b]4.6) Mic?:[/b]
[list=none]
[${mic === 'Yes' ? 'X' : ' '}] Yes
[${mic === 'No' ? 'X' : ' '}] No
[/list]

[b]4.7) Other Servers?:[/b]
[list=none]
[${other === 'Yes' ? 'X' : ' '}] Yes
[${other === 'No' ? 'X' : ' '}] No
[/list]
${document.getElementById('o_elab').value}

[b]4.8) Inspiration:[/b]
[list=none]
${document.getElementById('o_insp').value}
[/list]

[b]4.9) Additional:[/b]
[list=none]
${document.getElementById('o_else').value}
[/list]

[b]4.10) AI Confirmation:[/b]
[list=none]
[*][${ai === 'Yes' ? 'X' : ' '}] Yes, I do.
[*][${ai === 'AI' ? 'X' : ' '}] I utilized AI.
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    // 3. FORCE COPY LOGIC (Hidden Textarea Method)
    const textArea = document.createElement("textarea");
    textArea.value = bbCode;
    textArea.style.position = "fixed"; 
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert("Success! BBCode copied.\n\nOpening Forum...");
    } catch (err) {
        alert("Copy failed. Please manually copy code.");
    }
    
    document.body.removeChild(textArea);

    // 4. OPEN FORUM IMMEDIATELY
    window.open("https://gov.eclipse-rp.net/viewforum.php?f=575", "_blank");
}
