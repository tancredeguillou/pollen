import { PollenClient } from '../src/PollenClient';
import { Command } from '../src/command';
import { AWSProvider } from '../src/providers/awsProvider';
import { GCSProvider } from '../src/providers/gcsProvider';
import { AzureProvider } from '../src/providers/azureProvider';

describe('PollenClient', () => {
    it('should initialize with all providers by default', () => {
        const client = new PollenClient();
        expect(client.providers).toHaveLength(3);
        expect(client.providers[0]).toBeInstanceOf(AWSProvider);
        expect(client.providers[1]).toBeInstanceOf(GCSProvider);
        expect(client.providers[2]).toBeInstanceOf(AzureProvider);
    });

    it('should initialize with specified providers', () => {
        const client = new PollenClient(['aws', 'gcs']);
        expect(client.providers).toHaveLength(2);
        expect(client.providers[0]).toBeInstanceOf(AWSProvider);
        expect(client.providers[1]).toBeInstanceOf(GCSProvider);
    });

    it('should throw an error for unknown provider', () => {
        expect(() => new PollenClient(['unknown'])).toThrow('Unknown provider: unknown');
    });

    it('should call resolve on the command with providers', async () => {
        const client = new PollenClient(['aws']);
        const mockCommand = {
            resolve: jest.fn()
        } as unknown as Command<any, any, any, any>;

        client.send(mockCommand);
        expect(mockCommand.resolve).toHaveBeenCalledWith(client.providers);
    });
});