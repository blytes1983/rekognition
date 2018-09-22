const Rekognition = require('node-rekognition')
const AWS = require('aws-sdk')
const Credentials = require('./config.js')


//const rekognition = new Rekognition(AWSParameters)

console.log(Credentials)

const s3 = new AWS.S3(Credentials)
//const s3Image = s3.upload("C:/Users/pamburi/Desktop/doc.jpg","")

//const imageLabels = rekognition.detectLabels(s3Image[0])

var params = {
    Bucket: "test-bucket-ocr",
    MaxKeys: 10
};

/*s3.listObjects(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);
});*/


AWS.config.apiVersions = {
    rekognition: '2016-06-27',
    // other service API versions
};

var rekognition = new AWS.Rekognition(Credentials);

var paramsImg = {
    Image: {
        S3Object: {
            Bucket: "test-bucket-ocr",
            Name: "pedidointerno3.jpg"
        }
    },
    //MaxLabels: 123,
    //MinConfidence: 70
};

/*rekognition.detectLabels(paramsImg, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});*/

rekognition.detectText(paramsImg, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});