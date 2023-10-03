const ee = require('events');
const ne = new ee();

ne.on('emailNotification', (user, message) => {
    console.log(`Email notification from ${user}: ${message}`);
});

ne.on('smsNotification', (user, message) => {
    console.log(`SMS notification sent to ${user}: ${message}`);
});

ne.emit('emailNotification', 'CODEBLOCKER', 'Email OTP to be verfied');
ne.emit('smsNotification', 'NODEJS', 'SMS OTP to be verfied');
