import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider
} from 'react-router';
import routes from './routes';
import { InitialDataProvider } from './lib/initial-data';
import type { InitialData } from './types/initial-data';

type RenderResult = {
  appHtml?: string;
  statusCode?: number;
  headers?: Record<string, string>;
  redirect?: {
    status: number;
    location: string;
  };
};

export async function render(url: string, initialData?: InitialData): Promise<RenderResult> {
  const handler = createStaticHandler(routes);
  const request = new Request(url, { method: 'GET' });
  const context = await handler.query(request);

  if (context instanceof Response) {
    return {
      redirect: {
        status: context.status,
        location: context.headers.get('Location') ?? '/'
      }
    };
  }

  const router = createStaticRouter(routes, context);
  const appHtml = renderToString(
    <InitialDataProvider initialData={initialData}>
      <StaticRouterProvider router={router} context={context} />
    </InitialDataProvider>
  );

  const headers = context.headers
    ? Object.fromEntries(context.headers.entries())
    : {};

  return {
    appHtml,
    statusCode: context.statusCode ?? 200,
    headers
  };
}
