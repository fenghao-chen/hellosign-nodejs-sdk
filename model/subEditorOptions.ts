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
 * This allows the requester to specify editor options when a preparing a document
 */
export class SubEditorOptions {
  /**
   * Allows requesters to edit the list of signers
   */
  "allowEditSigners"?: boolean = false;
  /**
   * Allows requesters to edit documents, including delete and add
   */
  "allowEditDocuments"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "allowEditSigners",
      baseName: "allow_edit_signers",
      type: "boolean",
    },
    {
      name: "allowEditDocuments",
      baseName: "allow_edit_documents",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubEditorOptions.attributeTypeMap;
  }
}
