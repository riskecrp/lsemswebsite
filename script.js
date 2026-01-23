function countWords(id, displayId) {
    const text = document.getElementById(id).value;
    const count = text.trim() ? text.trim().split(/\s+/).length : 0;
    document.getElementById(displayId).innerText = count;
}

function generateBB() {
    const g = document.getElementById('p_gender').value;
    const ai = document.getElementById('o_ai').value;
    const mic = document.getElementById('o_mic').value;
    const other = document.getElementById('o_other').value;

    const bb = `[img]https://i.imgur.com/a32OdzR.png[/img]
[lsemssubtitle]SECTION 1 - PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1) Name[/b]
[list=none]
Title: ${document.getElementById('p_title').value}
First Name: ${document.getElementById('p_fname').value}
Last Name: ${document.getElementById('p_lname').value}
[/list]

[b]1.2) Gender - (use 'X' to select):[/b]
[list=none]
[${g === 'Female' ? 'X' : ' '}] Female
[${g === 'Male' ? 'X' : ' '}] Male
[${g === 'Other' ? 'X' : ' '}] Other
[/list]

[b]1.3) Date & Place of Birth [/b]
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
${document.getElementById('p_convict').value || 'N/A'}
[/list]

[b]1.6.1) Reformation Status:[/b]
[list=none]
${document.getElementById('p_ref').value || 'N/A'}
[/list]

[b]1.7) Identification:[/b]
[list=none]
[URL=${document.getElementById('p_idlink').value}]Attached Documents[/URL]
[/list]
[/divbox]

[lsemssubtitle]SECTION 2 - EXPERIENCES, PAST EMPLOYMENT, AND REFERENCES[/lsemssubtitle]
[divbox=white]
[b]2.1) Prior Employment/Education/Training:[/b]
[list=none]
${document.getElementById('e_quals').value}
[/list]

[b]2.2) Employment History[/b]
[list=none]
Company Name: ${document.getElementById('e_co').value}
Employment Term: ${document.getElementById('e_term').value}
Title: ${document.getElementById('e_title').value}
Job Duties: ${document.getElementById('e_duties').value}
Reason for Leaving: ${document.getElementById('e_reason').value}
[/list]

[b]2.3) Speak English Proficiently?:[/b]
[list=none]
[${document.getElementById('e_speak').value === 'Yes' ? 'X' : ' '}] Yes
[${document.getElementById('e_speak').value === 'No' ? 'X' : ' '}] No
[/list]

[b]2.4) Write English Proficiently?:[/b]
[list=none]
[${document.getElementById('e_write').value === 'Yes' ? 'X' : ' '}] Yes
[${document.getElementById('e_write').value === 'No' ? 'X' : ' '}] No
[/list]

[b]2.5) Other languages:[/b]
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
[b]3.2) Candidate Suitability:[/b]
[list=none]
${document.getElementById('g_cand').value}
[/list]
[b]3.3) Improvement Contribution:[/b]
[list=none]
${document.getElementById('g_imp').value}
[/list]
[b]3.4) Short Biography:[/b]
[list=none]
${document.getElementById('g_bio').value}
[/list]
[/divbox]

[lsemssubtitle](( SECTION 4 - OOC INFORMATION ))[/lsemssubtitle]
[divbox=white]
[b]4.1) Player Information[/b]
[list=none]
Name/nickname: ${document.getElementById('o_nick').value}
Gender: ${document.getElementById('o_gender').value}
Country/Age: ${document.getElementById('o_country_age').value}
Timezone: ${document.getElementById('o_tz').value}
Discord Username: ${document.getElementById('o_disc').value}
[/list]

[b]4.2) ECRP Forum Profile[/b]
[list=none]
Forum Account Name: ${document.getElementById('o_fname').value}
Forum Profile Link: [url=${document.getElementById('o_flink').value}]Here[/url]
[/list]

[b]4.3) Admin Record:[/b]
[list=none]
[URL=${document.getElementById('o_admin').value}] Admin Record[/URL]
[/list]

[b]4.4) Current Factions:[/b]
[list=none]
${document.getElementById('o_factions').value || 'None'}
[/list]

[b]4.5) Experience/Benefit:[/b]
[list=none]
${document.getElementById('o_rp_exp').value}
[/list]

[b]4.6) Microphone & Teamspeak?:[/b]
[list=none]
[${mic === 'Yes' ? 'X' : ' '}] Yes
[${mic === 'No' ? 'X' : ' '}] No
[/list]

[b]4.7) Other servers?:[/b]
[list=none]
[${other === 'Yes' ? 'X' : ' '}] Yes
[${other === 'No' ? 'X' : ' '}] No
[/list]

[b]4.8) Inspiration:[/b]
[list=none]
${document.getElementById('o_inspire').value || 'N/A'}
[/list]

[b]4.9) Additional Info:[/b]
[list=none]
${document.getElementById('o_else').value || 'N/A'}
[/list]

[b]4.10) AI Confirmation:[/b]
[list=none]
[*][${ai === 'Yes' ? 'X' : ' '}] Yes, I do.
[*][${ai === 'Gen' ? 'X' : ' '}] I utilized AI-based text generators.
[*][${ai === 'Gram' ? 'X' : ' '}] I utilized Grammar-assist software.
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    navigator.clipboard.writeText(bb).then(() => {
        alert("Application copied! Redirecting to the forum...");
        window.open("https://gov.eclipse-rp.net/posting.php?mode=post&f=575", "_blank");
    });
}
