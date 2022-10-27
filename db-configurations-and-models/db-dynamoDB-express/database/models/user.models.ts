import { DynamoDB } from '../config'

export const createTable = () => {
  const params = {
    TableName: 'User',
    KeySchema: [{ AttributeName: 'email', KeyType: 'HASH' }],
    AttributeDefinitions: [{ AttributeName: 'email', AttributeType: 'S' }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  }

  DynamoDB.createTable(params, function (err, data) {
    if (err) {
      console.error('Unable to create table', err)
    } else {
      console.log('Created table', data)
    }
  })
}


