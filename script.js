function generateBB() {
    const g = document.getElementById('1_2_gender').value;
    const s = document.getElementById('2_3_speak').value;
    const w = document.getElementById('2_4_write').value;
    const mic = document.getElementById('4_6_mic').value;
    const o = document.getElementById('4_7_other').value;
    const ai = document.getElementById('4_10_ai').value;

    const bb = `[img]https://i.imgur.com/a32OdzR.png[/img]
[lsemssubtitle]SECTION 1 - PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1) Name[/b]
[list=none]
Title: ${document.getElementById('1_1_title').value}
First Name: ${document.getElementById('1_1_fname').value}
Last Name: ${document.getElementById('1_1_lname').value}
[/list]

[b]1.2) Gender - (use 'X' to select):[/b]
[list=none]
[${g === 'Female' ? 'X' : ' '}] Female
[${g === 'Male' ? 'X' : ' '}] Male
[${g === 'Other' ? 'X' : ' '}] Other
[/list]

[b]1.3) Date & Place of Birth [/b]
[list=none]
Place: ${document.getElementById('1_3_pob').value}
Date: ${document.getElementById('1_3_dob').value}
[/list]

[b]1.4) Weight & Height[/b]
[list=none]
Weight: ${document.getElementById('1_4_w').value}
Height: ${document.getElementById('1_4_h').value}
[/list]

[b]1.5) Contact details[/b]
[list=none]
Phone Number: ${document.getElementById('1_5_phone').value}
[/list]

[b]1.6) Convictions:[/b]
[list=none]
${document.getElementById('1_6_crim').value || 'No'}
[/list]

[b]1.6.1) Reformation Status:[/b]
[list=none]
${document.getElementById('1_6_1_ref').value || 'N/A'}
[/list]

[b]1.7) Documents:[/b]
[list=none]
[URL=${document.getElementById('1_7_link').value}]Attached Documents[/URL]
[/list]
[/divbox]

[lsemssubtitle]SECTION 2 - EXPERIENCES, PAST EMPLOYMENT, AND REFERENCES[/lsemssubtitle]
[divbox=white]
[b]2.1) Prior Exp:[/b]
[list=none]
${document.getElementById('2_1_exp').value}
[/list]

[b]2.2) Employment History[/b]
[list=none]
Company Name: ${document.getElementById('2_2_co').value}
Employment Term: ${document.getElementById('2_2_term').value}
Title: ${document.getElementById('2_2_title').value}
Job Duties: ${document.getElementById('2_2_duties').value}
Reason for Leaving: ${document.getElementById('2_2_reason').value}
[/list]

[b]2.3) Speak English?:[/b]
[list=none]
[${s === 'Yes' ? 'X' : ' '}] Yes
[${s === 'No' ? 'X' : ' '}] No
[/list]

[b]2.4) Write English?:[/b]
[list=none]
[${w === 'Yes' ? 'X' : ' '}] Yes
[${w === 'No' ? 'X' : ' '}] No
[/list]

[b]2.5) Other languages:[/b]
[list=none]
${document.getElementById('2_5_langs').value || 'N/A'}
[/list]
[/divbox]

[lsemssubtitle]SECTION 3 - GENERAL QUESTIONS[/lsemssubtitle]
[divbox=white]
[b]3.1 Motivation:[/b]
[list=none]
${document.getElementById('3_1_mot').value}
[/list]
[b]3.2) Candidate:[/b]
[list=none]
${document.getElementById('3_2_cand').value}
[/list]
[b]3.3) Improve LSEMS:[/b]
[list=none]
${document.getElementById('3_3_imp').value}
[/list]
[b]3.4) Bio:[/b]
[list=none]
${document.getElementById('3_4_bio').value}
[/list]
[/divbox]

[lsemssubtitle](( SECTION 4 - OOC INFORMATION ))[/lsemssubtitle]
[divbox=white]
[b]4.1) Player Information[/b]
[list=none]
Name/nickname: ${document.getElementById('4_1_nick').value}
Gender: ${document.getElementById('4_1_gender').value}
Country: ${document.getElementById('4_1_country').value}
Age: ${document.getElementById('4_1_age').value}
Timezone: ${document.getElementById('4_1_tz').value}
Discord Username: ${document.getElementById('4_1_disc').value}
[/list]

[b]4.2) ECRP Forum Profile[/b]
[list=none]
Forum Account Name: ${document.getElementById('4_2_fname').value}
Forum Profile Link: [url=${document.getElementById('4_2_flink').value}]Here[/url]
[/list]

[b]4.3) Admin Record:[/b]
[list=none]
[URL=${document.getElementById('4_3_admin').value}] Admin Record[/URL]
[/list]

[b]4.4) Factions:[/b]
[list=none]
${document.getElementById('4_4_factions').value}
[/list]

[b]4.5) Exp:[/b]
[list=none]
${document.getElementById('4_5_benefit').value}
[/list]

[b]4.6) Mic/TS?:[/b]
[list=none]
[${mic === 'Yes' ? 'X' : ' '}] Yes
[${mic === 'No' ? 'X' : ' '}] No
[/list]

[b]4.7) Other servers?:[/b]
[list=none]
[${o === 'Yes' ? 'X' : ' '}] Yes
[${o === 'No' ? 'X' : ' '}] No
[/list]
${document.getElementById('4_7_elab').value || ''}

[b]4.8) Inspiration:[/b]
[list=none]
${document.getElementById('4_8_insp').value}
[/list]

[b]4.9) Additional:[/b]
[list=none]
${document.getElementById('4_9_else').value}
[/list]

[b]4.10) AI Confirmation:[/b]
[list=none]
[*][${ai === 'Yes' ? 'X' : ' '}] Yes, I do.
[*][${ai === 'AI' ? 'X' : ' '}] I utilized AI-based text generators to assist me.
[*][${ai === 'Gram' ? 'X' : ' '}] I utilized Grammar-assist software.
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    // Attempt to copy to clipboard
    const el = document.createElement('textarea');
    el.value = bb;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert("BBCode Copied! Now redirecting to the recruitment section.");
    window.open("https://gov.eclipse-rp.net/viewforum.php?f=575", "_blank");
}
