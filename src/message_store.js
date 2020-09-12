let messages = {
    sent: [
        {
            to: "friend@nmail.com",
            subject: "Check this out",
            body: "It's so cool"
        },
        { to: "person@nmail.com", subject: "zzz", body: "so booring" }
    ],
    inbox: [
        {
            from: "grandma@nmail.com",
            subject: "Fwd: Fwd: Fwd: Check this out",
            body: "Stay at home mom discovers cure for leg cramps. Doctors hate her"
        },
        {
            from: "person@nmail.com",
            subject: "Questionnaire",
            body: "Take this free quiz win $1000 dollars"
        }
    ]
};

const MessageStore = {
    getInboxMessages() {
        return messages.inbox.slice();
    },
    getSentMessages() {
        return messages.sent.slice();
    }
}

module.exports = MessageStore;