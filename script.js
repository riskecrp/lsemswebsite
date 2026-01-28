function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.menu-item');
    buttons.forEach(btn => btn.classList.remove('active'));

    const selectedContent = document.getElementById(tabName);
    if(selectedContent) selectedContent.classList.add('active');
    
    // Logic to highlight sidebar buttons based on click
    // Finding the button that called the function
    const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabName));
    if(clickedBtn) clickedBtn.classList.add('active');
}

// ----------------------------------------------------
// GENERATE RECRUITMENT BBCODE
// ----------------------------------------------------
function generateRecruitmentBB() {
    // 1. GATHER DATA
    const title = document.getElementById('p_title').value;
    const fname = document.getElementById('p_fname').value;
    const lname = document.getElementById('p_lname').value;
    const gender = document.getElementById('p_gender').value;
    const speak = document.getElementById('e_speak').value;
    const write = document.getElementById('e_write').value;
    const mic = document.getElementById('o_mic').value;
    const other = document.getElementById('o_other').value;
    const ai = document.getElementById('o_ai').value;

    // 2. BUILD EXACT BBCODE TEMPLATE
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

[b]1.3) Date & Place of Birth [/b]
[list=none]
Place: ${document.getElementById('p_pob').value}
Date: ${document.getElementById('p_dob').value}
[/list]

[b]1.4) Weight & Height (Metric or Imperial)[/b]
[list=none]
Weight: ${document.getElementById('p_weight').value}
Height: ${document.getElementById('p_height').value}
[/list]

[b]1.5) Contact details[/b]
[list=none]
Phone Number: ${document.getElementById('p_phone').value}
[/list]

[b]1.6) Have you ever been convicted of a crime? If so, explain.[/b]
[list=none]
${document.getElementById('p_crim').value || 'ANSWER'}
[/list]

[b]1.6.1) If yes, have you gone through the Felon Reformation Program, Detention and Parole Bureau, or therapy with the LSEMS?[/b]
[list=none]
${document.getElementById('p_ref').value || 'ANSWER'}
[/list]

[b]1.7) Please provide proof of your identification and license (Driver's license required).[/b]
[list=none]
[URL=${document.getElementById('p_id').value}]Attached Documents[/URL]
[/list]

[/divbox]
[lsemssubtitle]SECTION 2 - EXPERIENCES, PAST EMPLOYMENT, AND REFERENCES[/lsemssubtitle]
[divbox=white]

[b]2.1) Please list and explain all prior Employment/Education/Training that you may have that qualifies you for a position.[/b]
[list=none]
${document.getElementById('e_quals').value || 'ANSWER'}
[/list]

[b]2.2) Employment History[/b]
[list=none]
Company Name: ${document.getElementById('e_co').value}
Employment Term: ${document.getElementById('e_term').value}
Title: ${document.getElementById('e_title').value}
Job Duties: ${document.getElementById('e_duties').value}
Reason for Leaving: ${document.getElementById('e_reason').value}
[/list]

[b]2.3) Can you speak to others in English proficiently? (use 'X' to select):[/b]
[list=none]
[${speak === 'Yes' ? 'X' : ' '}] Yes
[${speak === 'No' ? 'X' : ' '}] No
[/list]

[b]2.4) Can you write to others in English proficiently? (use 'X' to select):[/b]
[list=none]
[${write === 'Yes' ? 'X' : ' '}] Yes
[${write === 'No' ? 'X' : ' '}] No
[/list]

[b]2.5) Please state any language(s) you know other than English and identify if you can read, write or speak the language(s).[/b]
[list=none]
${document.getElementById('e_langs').value || 'ANSWER'}
[/list]
[/divbox]

[lsemssubtitle]SECTION 3 - GENERAL QUESTIONS[/lsemssubtitle]
[divbox=white]
[b]3.1 What is your motivation behind wanting to join the Los Santos Emergency Medical Services?[/b] [color=Firebrick](minimum 75 words)[/color]
[list=none]
${document.getElementById('g_mot').value || 'ANSWER'} 
[/list]

[b]3.2) What makes you a good candidate to join the Los Santos Emergency Medical Services?[/b] [color=Firebrick](minimum 75 words)[/color]
[list=none]
${document.getElementById('g_cand').value || 'ANSWER'}
[/list]

[b]3.3) If hired, how would you help improve the Los Santos Emergency Medical Services?[/b] [color=Firebrick](minimum 75 words)[/color]
[list=none]
${document.getElementById('g_imp').value || 'ANSWER'}
[/list]

[b]3.4) Please provide a short biography about yourself and your most valuable trait is that could benefit the department [/b][color=Firebrick](minimum 75 words)[/color]
[list=none]
${document.getElementById('g_bio').value || 'ANSWER'}
[/list]

[/divbox]
[lsemssubtitle](( SECTION 4 - OOC INFORMATION ))[/lsemssubtitle]
[divbox=white]
[b]4.1) Player Information[/b]
[list=none]
Name/nickname: ${document.getElementById('o_nick').value}
Gender: ${document.getElementById('o_gender').value}
Country: ${document.getElementById('o_country').value}
Age: ${document.getElementById('o_age').value}
Timezone: ${document.getElementById('o_tz').value}
Discord Username: ${document.getElementById('o_disc').value}
[/list]

[b]4.2) ECRP Forum Profile[/b]
[list=none]
Forum Account Name: ${document.getElementById('o_fname').value}
Forum Profile Link: [url=${document.getElementById('o_flink').value}]Here[/url]
[/list]

[b]4.3) Please provide an unedited screenshot of your admin record, including the character list and the admin log below. The image should be uncensored with the exception of vehicles. (Please use the new panel as shown in the example. The new panel can be found [url=https://eclipse-rp.net/panel/#/]here[/url]. [url=https://imgur.com/a/bajTunV]EXAMPLE[/url])[/b]
[list=none]
[URL=${document.getElementById('o_admin').value}] Admin Record[/URL]
[/list]

[b]4.4) List any faction(s) you are currently a part of:[/b] 
[list=none]
${document.getElementById('o_factions').value || 'ANSWER'}
[/list]

[b]4.5) Please provide any roleplay or real-life experience that you have acquired that may benefit the LSEMS as a faction, and/or your experience within the faction.[/b]
[list=none]
${document.getElementById('o_exp').value || 'ANSWER'}
[/list]

[b]4.6) Do you have a working microphone and are you able to use TeamSpeak?* - (use 'X' to select):[/b]
[list=none]
[${mic === 'Yes' ? 'X' : ' '}] Yes
[${mic === 'No' ? 'X' : ' '}] No

[i][size=85]*this is not eliminatory; text-only is welcome within the faction, but may be more challenging.[/size][/i]
[/list]

[b]4.7) Do you currently play on any other GTA-RP servers and are you in any faction positions there? - (use 'X' to select):[/b]
[list=none]
[${other === 'Yes' ? 'X' : ' '}] Yes
[${other === 'No' ? 'X' : ' '}] No
If yes, please elaborate: ${document.getElementById('o_elab').value}
[/list]

[b]4.8) What or who inspired you to make this Application? (Optional)[/b]
[list=none]
${document.getElementById('o_insp').value || 'ANSWER'}
[/list]

[b]4.9) Would you like to add anything else that was not directly inquired about within the application? (Optional)[/b]
[list=none]
${document.getElementById('o_else').value || 'ANSWER'}
[/list]

[b]4.10) Do you confirm you have written all of your answers in the above application on your own and without the use of AI-based text generators?*[/b]
[list=none]
[*][${ai === 'Yes' ? 'X' : ' '}] Yes, I do.
[*][${ai === 'AI' ? 'X' : ' '}] I utilized AI-based text generators to assist me.
[*][${ai === 'Gram' ? 'X' : ' '}] I utilized Grammar-assist software*, but have otherwise written the application myself (Light use is irrelevant).

*Grammar-assist software, such as Grammarly, may be flagged as AI when used to edit larger portions of text. 
[/list]

[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    copyAndOpen(bbCode, "https://gov.eclipse-rp.net/viewforum.php?f=575");
}

// ----------------------------------------------------
// GENERATE REINSTATEMENT BBCODE
// ----------------------------------------------------
function generateReinstatementBB() {
    // 1. GATHER DATA
    const fname = document.getElementById('r_fname').value;
    const mname = document.getElementById('r_mname').value;
    const lname = document.getElementById('r_lname').value;
    
    // 2. BUILD EXACT BBCODE TEMPLATE
    const bbCode = `[img]https://i.imgur.com/kwvK4Nt.png[/img]
[lsemssubtitle]1. PERSONAL INFORMATION[/lsemssubtitle]
[divbox=white]
[b]1.1 Name[/b]
[list=none]
[*]First Name: ${fname}
[*]Middle Name: ${mname}
[*]Last Name: ${lname}
[/list]

[b]1.2 Phone Number[/b]
[list=none]
[*]Phone Number: ${document.getElementById('r_phone').value}
[/list]

[b]1.2 Please provide proof of your identification and license [color=Firebrick](Driver's license required)[/color].[/b]
[list=none]
[url=${document.getElementById('r_id').value}]Attached Documents[/url]
[/list]
[/divbox]

[lsemssubtitle]2. EMPLOYMENT INFORMATION[/lsemssubtitle]
[divbox=white]
[b]2.1 Department Employment Details:[/b]
[list=none]
[*][b]Former Rank:[/b] ${document.getElementById('r_rank').value}
[*][b]Employment End Date:[/b] ${document.getElementById('r_end_date').value}
[*][b]Reason:[/b] ${document.getElementById('r_reason').value}
[/list]

[list=none]
[*][b]Desired Rank:[/b] ${document.getElementById('r_desired_rank').value}.
[/list]

[b]2.2 If you filed for resignation with the Los Santos Emergency Medical Services, what was the reason behind doing so? [/b]
[list=none]
[*] ${document.getElementById('r_resig_reason').value}
[/list]
[/divbox]

[lsemssubtitle]3. EMPLOYMENT DURING ABSENCE[/lsemssubtitle]
[divbox=white]
[b]3.1 Employment during absence[/b]
[list=none]
[*][b]Company:[/b] ${document.getElementById('r_abs_company').value}
[*][b]Position:[/b] ${document.getElementById('r_abs_pos').value}
[*][b]Employment End Date:[/b] ${document.getElementById('r_abs_end').value}
[*][b]Reason:[/b] ${document.getElementById('r_abs_reason').value}
[/list]
[/divbox]

[lsemssubtitle]4. GENERAL QUESTIONS[/lsemssubtitle]
[divbox=white]
[b]4.1 What is your motivation behind reinstating back to the Los Santos Emergency Medical Services?[/b]
[list=none]
[*] ${document.getElementById('r_motivation').value}
[/list]

[b]4.2 Have you had any felony or misdemeanor charges against you in the time that you were gone?[/b]
[list=none]
[*] ${document.getElementById('r_charges').value}
[/list]

[b]4.3 What have you done since your resignation or termination?[/b]
[list=none]
[*] ${document.getElementById('r_activities').value}
[/list]

[/divbox]

[lsemssubtitle][ooc]5. OOC INFORMATION[/ooc][/lsemssubtitle]
[divbox=white]
[b]5.1 ECRP Forum Profile[/b]
[list=none]
Forum Account Name: ${document.getElementById('r_forum_name').value}
Forum Profile Link: [url=${document.getElementById('r_forum_link').value}]PRESS HERE[/url]
[/list]

[b]5.2 Please provide an unedited screenshot of your admin record [color=Firebrick](only the character list and admin logs!)[/color] Example of what to crop [url=https://imgur.com/0nNC84j]here[/url].[/b]
[list=none]
[url=${document.getElementById('r_admin_record').value}]Admin Record[/url]
[/list]

[b]5.3 List all the factions you are currently a part of across all characters:[/b]
[list=none]
${document.getElementById('r_factions').value}
[/list]

[b]5.4 Discord Username (Example: Name#0000):[/b]
[list=none]
[*]${document.getElementById('r_discord').value}
[/list]

[b]5.5 What have you done on Eclipse Roleplay following your departure from the Los Santos Emergency Medical Services?[/b] 
[list=none]
${document.getElementById('r_ecrp_activities').value}
[/list]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`;

    copyAndOpen(bbCode, "https://gov.eclipse-rp.net/viewforum.php?f=576");
}

// ----------------------------------------------------
// UTILITY: COPY AND OPEN URL
// ----------------------------------------------------
function copyAndOpen(text, url) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; 
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if(successful) {
            alert("SUCCESS!\n\nBBCode copied to clipboard.\n\nOpening forum in 2 seconds...");
            setTimeout(() => {
                window.open(url, "_blank");
            }, 100);
        } else {
            alert("Copy failed. Please manually copy the code.");
        }
    } catch (err) {
        alert("Browser blocked copy. Please manually copy.");
    }
    
    document.body.removeChild(textArea);
}
