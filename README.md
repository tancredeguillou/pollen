# @pollen-sdk/aws

## Description

Pollen SDK for JavaScript Client for Node.js, Browser and React Native. This SDK follows the AWS SDK patterns and is fully compatible with @aws-sdk/client-s3.

<p></p>

## Installing

To install the this package, simply type add or install @pollen-sdk
using your favorite package manager:

- `npm install @pollen-sdk`
- `yarn add @pollen-sdk`
- `pnpm add @pollen-sdk`

## Getting Started

### Import

The pollen SDK is modulized by clients and commands.
To send a request, you only need to import the `PollenClient` and
the commands you need, for example `ListBucketsCommand`:

```js
// ES5 example
const { PollenClient, ListBucketsCommand } = require("@pollen-sdk");
```

```ts
// ES6+ example
import { PollenClient, ListBucketsCommand } from "@pollen-sdk";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PollenClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBucketsCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

<!-- 
TODO: Do we want to focus on the latest AWS version?
#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://AWS.amazon.com/blogs/developer/modular-packages-in-AWS-sdk-for-javascript/)

```ts
import * as AWS from "@AWS-sdk";
const client = new AWS.S3({ region: "REGION" });

// async/await.
try {
  const data = await client.listBuckets(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBuckets(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBuckets(params, (err, data) => {
  // process err and data.
});
``` -->

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

TODO - add documentation.
- Visit [Developer Guide](https://docs.AWS.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`AWS-sdk-js`](https://AWS.amazon.com/blogs/developer/tag/AWS-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/AWS-sdk-js) and tag it with `AWS-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/AWS/AWS-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/AWS/AWS-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/AWS-samples/AWS-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@AWS-sdk` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/AWS/AWS-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary> TODO -
AbortMultipartUpload
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/AbortMultipartUploadCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/AbortMultipartUploadCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/AbortMultipartUploadCommandOutput/)

</details>
<details>
<summary> TODO -
CompleteMultipartUpload
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/CompleteMultipartUploadCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CompleteMultipartUploadCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CompleteMultipartUploadCommandOutput/)

</details>
<details>
<summary> TODO -
CopyObject
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/CopyObjectCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CopyObjectCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CopyObjectCommandOutput/)

</details>
<details>
<summary>
CreateBucket
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/CreateBucketCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CreateBucketCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CreateBucketCommandOutput/)

</details>
<details>
<summary> TODO -
CreateMultipartUpload
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/CreateMultipartUploadCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CreateMultipartUploadCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CreateMultipartUploadCommandOutput/)

</details>
<details>
<summary> TODO -
CreateSession
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/CreateSessionCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CreateSessionCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/CreateSessionCommandOutput/)

</details>
<details>
<summary>
DeleteBucket
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketAnalyticsConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketAnalyticsConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketAnalyticsConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketAnalyticsConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketCors
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketCorsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketCorsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketCorsCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketEncryption
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketEncryptionCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketEncryptionCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketEncryptionCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketIntelligentTieringConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketIntelligentTieringConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketIntelligentTieringConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketIntelligentTieringConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketInventoryConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketInventoryConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketInventoryConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketInventoryConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketLifecycle
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketLifecycleCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketLifecycleCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketLifecycleCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketMetricsConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketMetricsConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketMetricsConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketMetricsConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketOwnershipControls
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketOwnershipControlsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketOwnershipControlsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketOwnershipControlsCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketPolicy
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketPolicyCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketPolicyCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketPolicyCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketReplication
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketReplicationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketReplicationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketReplicationCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketTagging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketTaggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketTaggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketTaggingCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteBucketWebsite
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteBucketWebsiteCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketWebsiteCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteBucketWebsiteCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteObject
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteObjectCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteObjectCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteObjectCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteObjects
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteObjectsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteObjectsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteObjectsCommandOutput/)

</details>
<details>
<summary> TODO -
DeleteObjectTagging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteObjectTaggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteObjectTaggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeleteObjectTaggingCommandOutput/)

</details>
<details>
<summary> TODO -
DeletePublicAccessBlock
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeletePublicAccessBlockCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeletePublicAccessBlockCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/DeletePublicAccessBlockCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketAccelerateConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketAccelerateConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketAccelerateConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketAccelerateConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketAcl
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketAclCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketAclCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketAclCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketAnalyticsConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketAnalyticsConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketAnalyticsConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketAnalyticsConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketCors
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketCorsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketCorsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketCorsCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketEncryption
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketEncryptionCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketEncryptionCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketEncryptionCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketIntelligentTieringConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketIntelligentTieringConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketIntelligentTieringConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketIntelligentTieringConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketInventoryConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketInventoryConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketInventoryConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketInventoryConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketLifecycleConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketLifecycleConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketLifecycleConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketLocation
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketLocationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketLocationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketLocationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketLogging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketLoggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketLoggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketLoggingCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketMetricsConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketMetricsConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketMetricsConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketMetricsConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketNotificationConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketNotificationConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketNotificationConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketNotificationConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketOwnershipControls
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketOwnershipControlsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketOwnershipControlsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketOwnershipControlsCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketPolicy
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketPolicyCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketPolicyCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketPolicyCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketPolicyStatus
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketPolicyStatusCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketPolicyStatusCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketPolicyStatusCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketReplication
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketReplicationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketReplicationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketReplicationCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketRequestPayment
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketRequestPaymentCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketRequestPaymentCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketRequestPaymentCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketTagging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketTaggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketTaggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketTaggingCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketVersioning
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketVersioningCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketVersioningCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketVersioningCommandOutput/)

</details>
<details>
<summary> TODO -
GetBucketWebsite
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetBucketWebsiteCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketWebsiteCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetBucketWebsiteCommandOutput/)

</details>
<details>
<summary> TODO -
GetObject
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectAcl
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectAclCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectAclCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectAclCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectAttributes
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectAttributesCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectAttributesCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectAttributesCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectLegalHold
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectLegalHoldCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectLegalHoldCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectLegalHoldCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectLockConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectLockConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectLockConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectLockConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectRetention
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectRetentionCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectRetentionCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectRetentionCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectTagging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectTaggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectTaggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectTaggingCommandOutput/)

</details>
<details>
<summary> TODO -
GetObjectTorrent
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectTorrentCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectTorrentCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetObjectTorrentCommandOutput/)

</details>
<details>
<summary> TODO -
GetPublicAccessBlock
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetPublicAccessBlockCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetPublicAccessBlockCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/GetPublicAccessBlockCommandOutput/)

</details>
<details>
<summary> TODO -
HeadBucket
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/HeadBucketCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/HeadBucketCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/HeadBucketCommandOutput/)

</details>
<details>
<summary> TODO -
HeadObject
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/HeadObjectCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/HeadObjectCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/HeadObjectCommandOutput/)

</details>
<details>
<summary> TODO -
ListBucketAnalyticsConfigurations
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketAnalyticsConfigurationsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketAnalyticsConfigurationsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketAnalyticsConfigurationsCommandOutput/)

</details>
<details>
<summary> TODO -
ListBucketIntelligentTieringConfigurations
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketIntelligentTieringConfigurationsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketIntelligentTieringConfigurationsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketIntelligentTieringConfigurationsCommandOutput/)

</details>
<details>
<summary> TODO -
ListBucketInventoryConfigurations
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketInventoryConfigurationsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketInventoryConfigurationsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketInventoryConfigurationsCommandOutput/)

</details>
<details>
<summary> TODO -
ListBucketMetricsConfigurations
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketMetricsConfigurationsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketMetricsConfigurationsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketMetricsConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListBuckets
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListBucketsCommandOutput/)

</details>
<details>
<summary> TODO -
ListDirectoryBuckets
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListDirectoryBucketsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListDirectoryBucketsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListDirectoryBucketsCommandOutput/)

</details>
<details>
<summary> TODO -
ListMultipartUploads
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListMultipartUploadsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListMultipartUploadsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListMultipartUploadsCommandOutput/)

</details>
<details>
<summary> TODO -
ListObjects
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListObjectsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListObjectsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListObjectsCommandOutput/)

</details>
<details>
<summary> TODO -
ListObjectsV2
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListObjectsV2Command/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListObjectsV2CommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListObjectsV2CommandOutput/)

</details>
<details>
<summary> TODO -
ListObjectVersions
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListObjectVersionsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListObjectVersionsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListObjectVersionsCommandOutput/)

</details>
<details>
<summary> TODO -
ListParts
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListPartsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListPartsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/ListPartsCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketAccelerateConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketAccelerateConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketAccelerateConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketAccelerateConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketAcl
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketAclCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketAclCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketAclCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketAnalyticsConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketAnalyticsConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketAnalyticsConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketAnalyticsConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketCors
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketCorsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketCorsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketCorsCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketEncryption
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketEncryptionCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketEncryptionCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketEncryptionCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketIntelligentTieringConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketIntelligentTieringConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketIntelligentTieringConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketIntelligentTieringConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketInventoryConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketInventoryConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketInventoryConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketInventoryConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketLifecycleConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketLifecycleConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketLifecycleConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketLogging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketLoggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketLoggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketLoggingCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketMetricsConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketMetricsConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketMetricsConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketMetricsConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketNotificationConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketNotificationConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketNotificationConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketNotificationConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketOwnershipControls
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketOwnershipControlsCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketOwnershipControlsCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketOwnershipControlsCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketPolicy
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketPolicyCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketPolicyCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketPolicyCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketReplication
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketReplicationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketReplicationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketReplicationCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketRequestPayment
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketRequestPaymentCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketRequestPaymentCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketRequestPaymentCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketTagging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketTaggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketTaggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketTaggingCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketVersioning
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketVersioningCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketVersioningCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketVersioningCommandOutput/)

</details>
<details>
<summary> TODO -
PutBucketWebsite
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutBucketWebsiteCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketWebsiteCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutBucketWebsiteCommandOutput/)

</details>
<details>
<summary> TODO -
PutObject
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectCommandOutput/)

</details>
<details>
<summary> TODO -
PutObjectAcl
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectAclCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectAclCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectAclCommandOutput/)

</details>
<details>
<summary> TODO -
PutObjectLegalHold
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectLegalHoldCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectLegalHoldCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectLegalHoldCommandOutput/)

</details>
<details>
<summary> TODO -
PutObjectLockConfiguration
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectLockConfigurationCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectLockConfigurationCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectLockConfigurationCommandOutput/)

</details>
<details>
<summary> TODO -
PutObjectRetention
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectRetentionCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectRetentionCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectRetentionCommandOutput/)

</details>
<details>
<summary> TODO -
PutObjectTagging
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectTaggingCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectTaggingCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutObjectTaggingCommandOutput/)

</details>
<details>
<summary> TODO -
PutPublicAccessBlock
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutPublicAccessBlockCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutPublicAccessBlockCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/PutPublicAccessBlockCommandOutput/)

</details>
<details>
<summary> TODO -
RestoreObject
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/RestoreObjectCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/RestoreObjectCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/RestoreObjectCommandOutput/)

</details>
<details>
<summary> TODO -
SelectObjectContent
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/SelectObjectContentCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/SelectObjectContentCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/SelectObjectContentCommandOutput/)

</details>
<details>
<summary> TODO -
UploadPart
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/UploadPartCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/UploadPartCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/UploadPartCommandOutput/)

</details>
<details>
<summary> TODO -
UploadPartCopy
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/UploadPartCopyCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/UploadPartCopyCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/UploadPartCopyCommandOutput/)

</details>
<details>
<summary> TODO -
WriteGetObjectResponse
</summary>

[Command API Reference](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/WriteGetObjectResponseCommand/) / [Input](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/WriteGetObjectResponseCommandInput/) / [Output](https://docs.AWS.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-AWS-sdk-client-s3/Interface/WriteGetObjectResponseCommandOutput/)

</details>