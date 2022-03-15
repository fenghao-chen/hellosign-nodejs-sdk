/**
 * HelloSign API
 * HelloSign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile, AttributeTypeMap } from "./models";
import { SubOAuth } from "./subOAuth";
import { SubOptions } from "./subOptions";
import { SubWhiteLabelingOptions } from "./subWhiteLabelingOptions";

export class ApiAppUpdateRequest {
  /**
   * The URL at which the ApiApp should receive event callbacks.
   */
  "callbackUrl"?: string;
  /**
   * An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)
   */
  "customLogoFile"?: RequestFile;
  /**
   * The domain names the ApiApp will be associated with.
   */
  "domains"?: Array<string>;
  /**
   * The name you want to assign to the ApiApp.
   */
  "name"?: string;
  "oauth"?: SubOAuth;
  "options"?: SubOptions;
  "whiteLabelingOptions"?: SubWhiteLabelingOptions;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "customLogoFile",
      baseName: "custom_logo_file",
      type: "RequestFile",
    },
    {
      name: "domains",
      baseName: "domains",
      type: "Array<string>",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "oauth",
      baseName: "oauth",
      type: "SubOAuth",
    },
    {
      name: "options",
      baseName: "options",
      type: "SubOptions",
    },
    {
      name: "whiteLabelingOptions",
      baseName: "white_labeling_options",
      type: "SubWhiteLabelingOptions",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiAppUpdateRequest.attributeTypeMap;
  }
}
