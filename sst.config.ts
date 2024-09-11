/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-demo",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("api");
    api.route("ANY /trpc/{proxy+}", "packages/core/src/server.handler")

    new sst.aws.Astro("web", {
      path: "packages/web/",
      environment: {
        PUBLIC_API_URL: api.url,
      },
    });
  },
});
