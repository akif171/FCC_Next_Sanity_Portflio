import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
    projectId: 'bv171li7',
    dataset: 'production',
    apiVersion: "2023-08-26",
    useCdn: false
}

const client = createClient(config)

export default client

