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

/**
 * An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
 */
export class TemplateResponseSignerRole {
  /**
   * The name of the Role.
   */
  "name"?: string;
  /**
   * If signer order is assigned this is the 0-based index for this role.
   */
  "order"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "order",
      baseName: "order",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseSignerRole.attributeTypeMap;
  }
}
