import { PollenClient, PollenClientConfig } from '../src/PollenClient';
import { Command } from '../src/command';
import { AWSProvider } from '../src/providers/awsProvider';
import { GCSProvider } from '../src/providers/gcsProvider';
import { AzureProvider } from '../src/providers/azureProvider';

const pollenClientConfig: PollenClientConfig = {
    awsConfig: {
        accessKeyId: "ASIA5ZVQSBTGUZ4HYRTH",
        secretAccessKey: "majmp/r6jn6wcF4O+EmFN1TkKYRCTdgkn9g+J9JF",
        sessionToken: "IQoJb3JpZ2luX2VjEFwaCXVzLWVhc3QtMiJHMEUCIQC6vC88ryp5QRjN4YKOSjCGzr3brpcKUjXLhd2Rs1JnyAIgFqGNaK/okC4WMEbQI1CzVkIQUreGBDhuQIwKWJC55z4qjQMIpf//////////ARABGgw5NDg0ODQzMTIyNjkiDH1kRdY7AwlHWRZ8DSrhAp7hoOKBMkncEPKDYfZLotxTuVVF1LJXvVH/eyelrkYU+DVxaIPcQ0GcjHFoRfrCxdAVxx7YEbeVRVKDP6bdJlmKli8/QdLqC2jgGlToDEas9X3J/ecKl+STsf1I79AveksjFRSuBsX6Imc6V3BiLWNyStoV3MJmHnBeK7rwHo6whqXfwur2NE1KLtNf4VrEuLXgIU20YsETz+l1diTzWSGndTKo/pY6ODV5PFZJKWdmaeXqWR9Pg5x5c3E2EwLNQPkN1bprwsvvA7vNmHlcrTLwAvS3uFNqdE0Y1eu28UX/cj9irdC4ZAjGJWUD6b2D4yw2JWX8FSFZL0yComsDN/sdR14j5Xj3btSmgA70FHwPnelbixdsE0S1eWSJipAKzpI3XNomBS2VCKYnqhL/cxUFzzs/mMjChD2YUzjrbgOaIU3FmjPfo2P/bkG2/YoPOZOoPLV6PxQ3lFCTlYMeskKpMKfs9LcGOqYBJ/WvUYnBv3WSGsE6NJ/eWR/cBRbEYizcNIHR0qFdKSbW+a5qni/MnWMwMqgfnPUUG/wgrvSBoCItD5YtLFVmjnu+je01pE9z7fLagTs+wjgMG08hGVO8oItIi9kbbeFcMadhPINlaz+kaateAlBALs8s2by+5bMj+CAMyzuoXvM8BikUNihn6WOxhhVlTwj1jaKguC7o3vB9/UXw27tYfJZrNDpRUQ=="
    },
    azureConfig: {
        connectionString: "DefaultEndpointsProtocol=https;AccountName=tancredempc;AccountKey=UkPA9xwO7KlblyFNIbIxo9f3+QvefAxVOIYbpVVoR/+t3z0u71CgHrfCbAi3WPePwTe5/DS7vx4Y+AStZPm+Tw==;EndpointSuffix=core.windows.net"
    },
    gcsConfig: {
        projectId: "peak-geode-436211-p8"
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