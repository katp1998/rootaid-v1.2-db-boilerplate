import aws from 'aws-sdk'

export const DynamoDB = aws.config.update({
    region: "us-east-1"
})   