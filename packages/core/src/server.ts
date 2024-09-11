import { awsLambdaRequestHandler, CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import { appRouter } from "./router";

export const handler = awsLambdaRequestHandler({
    router: appRouter,
    batching: { enabled: false },
    responseMeta() {
        return {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST",
            },
        };
    },
})
