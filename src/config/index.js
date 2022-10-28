import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
const ENV = process.env.ENV || 'development';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });
const envConfig = path.resolve(__dirname, './environments', ENV);

const defaultConfig = { ...envConfig, env: ENV };

export default defaultConfig;
