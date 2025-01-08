import { PollenClient, PollenClientConfig } from '../src/PollenClient';
import { Command } from '../src/command';
import { AWSProvider } from '../src/providers/awsProvider';
import { GCSProvider } from '../src/providers/gcsProvider';
import { AzureProvider } from '../src/providers/azureProvider';

const pollenClientConfig: PollenClientConfig = {
    awsConfig: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN
    },
    azureConfig: {
        connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING
    },
    gcsConfig: {
        projectId: process.env.GCLOUD_STORAGE_PROJECT_ID
    }
};

describe('PollenClient', () => {
    it('should initialize with all providers by default', () => {
        const client = new PollenClient(pollenClientConfig);
        expect(client.providers.list).toHaveLength(3);
        expect(client.providers.list[0]).toBeInstanceOf(AWSProvider);
        expect(client.providers.list[1]).toBeInstanceOf(AzureProvider);
        expect(client.providers.list[2]).toBeInstanceOf(GCSProvider);
    });

    it('should initialize with specified providers', () => {
        pollenClientConfig.providerNames = ['aws', 'gcs'];
        const client = new PollenClient(pollenClientConfig);
        expect(client.providers.list).toHaveLength(2);
        expect(client.providers.list[0]).toBeInstanceOf(AWSProvider);
        expect(client.providers.list[1]).toBeInstanceOf(GCSProvider);
    });

    it('should throw an error for unknown provider', () => {
        pollenClientConfig.providerNames = ['unknown', 'aws'];
        expect(() => new PollenClient(pollenClientConfig)).toThrow('Unknown provider: unknown');
    });

    it('should throw an error for not having aws provider', () => {
        pollenClientConfig.providerNames = ['unknown'];
        expect(() => new PollenClient(pollenClientConfig)).toThrow('aws must be included in the provider list but got unknown.');
    });

    it('should call resolve on the command with providers', async () => {
        pollenClientConfig.providerNames = ['aws'];
        const client = new PollenClient(pollenClientConfig);
        const mockCommand = {
            resolve: jest.fn()
        } as unknown as Command<any, any, any, any>;

        client.send(mockCommand);
        expect(mockCommand.resolve).toHaveBeenCalledWith(client.providers);
    });
});