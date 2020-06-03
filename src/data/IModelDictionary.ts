/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { EntityRelated } from "../model/enums/EntityRelated";
import { EntityKind } from "../model/enums/EntityKind";
import { IDefaultDictionary } from "./IDefaultDictionary";
import { IEnumDictionary } from "./IEnumDictionary";

export interface IModelDictionary {
    title: string;
    shortName: string;
    description: string;
    index: EntityRelated;
    visible: boolean;
    entityKind: EntityKind;
    pathName: string;
    autoNumeric: boolean;
    className: string;
    stringData: { [key: number]: IDefaultDictionary; };
    numData: { [key: number]: IDefaultDictionary; };
    doubleData: { [key: number]: IDefaultDictionary; };
    boolData: { [key: number]: IDefaultDictionary; };
    geoData: { [key: number]: IDefaultDictionary; };
    dateData: { [key: number]: IDefaultDictionary; };
    enumData: { [key: number]: IEnumDictionary; };
    relData: { [key: number]: IDefaultDictionary; };
}
