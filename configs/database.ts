import * as process from 'process';
import { registerAs } from '@nestjs/config';

export const CONFIG_DATABASE = 'database';

export default registerAs(CONFIG_DATABASE, () => {
  const { MONGO_DB_HOST, MONGO_DB_USER, MONGO_DB_PASSWORD } = process.env;

  return {
    dailyAiNotice: {
      uri: `mongodb://${MONGO_DB_HOST}/daily-ai-notice`,
      user: MONGO_DB_USER,
      pass: MONGO_DB_PASSWORD,
    },
  };
});
