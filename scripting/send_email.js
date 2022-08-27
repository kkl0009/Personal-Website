function send_email(sender_addr, message) {
    const sender = sender_addr.value;
    const msg = message.value;

    if(!is_email(sender)) {
        alert("Please enter a valid email address");
        return;
    }
}

function is_email(addr) {
    const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return email_regex.test(addr);
}