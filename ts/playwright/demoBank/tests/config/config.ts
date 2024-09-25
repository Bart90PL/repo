import dotenv from 'dotenv';

const envFile = process.env.ENV_FILE || '.env.prod';

dotenv.config({ path: envFile });

export const clientId = process.env.CLIENT_ID as string;
export const clientSecret = process.env.CLIENT_SECRET as string;
export const baseUrl = process.env.BASE_URL as string;
