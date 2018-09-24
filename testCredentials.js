const AWS = require('aws-sdk')

var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

var params = {
    Bucket: "test-bucket-ocr",
    MaxKeys: 10
};

const s3 = new AWS.S3()

s3.listObjects(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);
});