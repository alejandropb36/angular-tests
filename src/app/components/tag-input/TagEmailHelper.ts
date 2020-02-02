export interface TagEmailModel {
    display: string;
    value: string;
}


export function loadEmails(txtEmails: string): TagEmailModel[] {
    const emails: string[] = txtEmails.split(';');
    const response: TagEmailModel[] = [];

    if (emails.length > 0) {
        for (const email of emails) {
            const tag: TagEmailModel = {
            display: email,
            value : email
            };
            response.push(tag);
        }
    }

    return response;
}

export function getEmails(emails: TagEmailModel[]): string {
    let txtEmails = '';
    if (emails.length > 0) {
        for (const email of emails) {
          txtEmails += email.value;
          txtEmails += ';';
        }
    }

    return txtEmails;
}