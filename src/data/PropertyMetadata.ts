/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { EntitySearchDisplayInfo } from './EntitySearchDisplayInfo';
import { KindProperty } from '../model/enums/KindProperty';

export interface PropertyMetadata {
    nameProp: string;
    isArray: boolean;
    info: EntitySearchDisplayInfo;
    required: boolean;
    unique: boolean;
    kindProperty: KindProperty;
    visible: boolean;
    autoNumeric: boolean;
    hasInput: boolean;
    typeString: string;
    index: number;
    className: string;
    indexFather: number;
}
