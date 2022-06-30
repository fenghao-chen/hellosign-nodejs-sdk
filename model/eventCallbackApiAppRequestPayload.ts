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
import { AccountResponse } from "./accountResponse";
import { EventCallbackRequestEvent } from "./eventCallbackRequestEvent";
import { SignatureRequestResponse } from "./signatureRequestResponse";
import { TemplateResponse } from "./templateResponse";

export class EventCallbackApiAppRequestPayload {
  "event": EventCallbackRequestEvent;
  "account"?: AccountResponse;
  "signatureRequest"?: SignatureRequestResponse;
  "template"?: TemplateResponse;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "event",
      baseName: "event",
      type: "EventCallbackRequestEvent",
    },
    {
      name: "account",
      baseName: "account",
      type: "AccountResponse",
    },
    {
      name: "signatureRequest",
      baseName: "signature_request",
      type: "SignatureRequestResponse",
    },
    {
      name: "template",
      baseName: "template",
      type: "TemplateResponse",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return EventCallbackApiAppRequestPayload.attributeTypeMap;
  }
}
