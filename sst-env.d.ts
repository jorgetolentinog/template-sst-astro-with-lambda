/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "api": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "lambda": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "web": {
      "type": "sst.aws.Astro"
      "url": string
    }
  }
}
export {}
