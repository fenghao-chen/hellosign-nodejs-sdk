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
import { AccountVerifyResponseAccount } from "./accountVerifyResponseAccount";
import { WarningResponse } from "./warningResponse";

export class AccountVerifyResponse {
  "account"?: AccountVerifyResponseAccount;
  "warnings"?: Array<WarningResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "account",
      baseName: "account",
      type: "AccountVerifyResponseAccount",
    },
    {
      name: "warnings",
      baseName: "warnings",
      type: "Array<WarningResponse>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountVerifyResponse.attributeTypeMap;
  }
}
