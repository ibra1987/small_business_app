import { createDirectus, rest, staticToken } from '@directus/sdk';

const directusClient = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

export default directusClient;