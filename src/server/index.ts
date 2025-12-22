import express from 'express';
import { join } from 'path';

export function createDevServer(appDir: string, port: number = 3000) {
  const app = express();

  app.use(express.json());
  app.use(express.static(join(appDir, 'public')));

  // Health check
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // TODO: Add MCP endpoint proxy
  // TODO: Add widget preview endpoint

  return {
    start: () => {
      return new Promise<void>((resolve) => {
        app.listen(port, () => {
          console.log(`Dev server running at http://localhost:${port}`);
          resolve();
        });
      });
    },
  };
}
