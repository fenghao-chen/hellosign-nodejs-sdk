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
 * The fields that should appear on the document, expressed as an array of objects.  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use `SubFormFieldsPerDocumentText` * Dropdown Field use `SubFormFieldsPerDocumentDropdown` * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink` * Checkbox Field use `SubFormFieldsPerDocumentCheckbox` * Radio Field use `SubFormFieldsPerDocumentRadio` * Signature Field use `SubFormFieldsPerDocumentSignature` * Date Signed Field use `SubFormFieldsPerDocumentDateSigned` * Initials Field use `SubFormFieldsPerDocumentInitials` * Text Merge Field use `SubFormFieldsPerDocumentTextMerge` * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
 */
export abstract class SubFormFieldsPerDocumentBase {
  /**
   * Represents the integer index of the `file` or `file_url` document the field should be attached to.
   */
  "documentIndex": number;
  /**
   * An identifier for the field that is unique across all documents in the request.
   */
  "apiId": string;
  /**
   * Size of the field in pixels.
   */
  "height": number;
  /**
   * Whether this field is required.
   */
  "required": boolean;
  /**
   * Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.  **NOTE**: If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.
   */
  "signer": string;
  "type": string;
  /**
   * Size of the field in pixels.
   */
  "width": number;
  /**
   * Location coordinates of the field in pixels.
   */
  "x": number;
  /**
   * Location coordinates of the field in pixels.
   */
  "y": number;
  /**
   * Display name for the field.
   */
  "name"?: string;
  /**
   * Page in the document where the field should be placed (requires documents be PDF files).  - When the page number parameter is supplied, the API will use the new coordinate system. - Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.
   */
  "page"?: number | null;

  static discriminator: string | undefined = "type";

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "documentIndex",
      baseName: "document_index",
      type: "number",
    },
    {
      name: "apiId",
      baseName: "api_id",
      type: "string",
    },
    {
      name: "height",
      baseName: "height",
      type: "number",
    },
    {
      name: "required",
      baseName: "required",
      type: "boolean",
    },
    {
      name: "signer",
      baseName: "signer",
      type: "string",
    },
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "width",
      baseName: "width",
      type: "number",
    },
    {
      name: "x",
      baseName: "x",
      type: "number",
    },
    {
      name: "y",
      baseName: "y",
      type: "number",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "page",
      baseName: "page",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFormFieldsPerDocumentBase.attributeTypeMap;
  }

  static discriminatorClassName(value: any): string | null {
    if (value === undefined || value === null) {
      return null;
    }

    if (value === "checkbox") {
      return "SubFormFieldsPerDocumentCheckbox";
    }
    if (value === "checkbox-merge") {
      return "SubFormFieldsPerDocumentCheckboxMerge";
    }
    if (value === "date_signed") {
      return "SubFormFieldsPerDocumentDateSigned";
    }
    if (value === "dropdown") {
      return "SubFormFieldsPerDocumentDropdown";
    }
    if (value === "hyperlink") {
      return "SubFormFieldsPerDocumentHyperlink";
    }
    if (value === "initials") {
      return "SubFormFieldsPerDocumentInitials";
    }
    if (value === "radio") {
      return "SubFormFieldsPerDocumentRadio";
    }
    if (value === "signature") {
      return "SubFormFieldsPerDocumentSignature";
    }
    if (value === "text") {
      return "SubFormFieldsPerDocumentText";
    }
    if (value === "text-merge") {
      return "SubFormFieldsPerDocumentTextMerge";
    }

    return null;
  }
}
