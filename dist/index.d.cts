import * as React from 'react';
import React__default from 'react';

interface Props$1 {
    className?: string;
    style?: React__default.CSSProperties;
    uid?: string;
    animationDelay?: string;
    animated?: boolean;
}
declare const Avatar: React__default.FC<Props$1>;

declare class Option {
    private _key;
    private _label;
    get key(): string;
    get label(): string;
    constructor({ key, label }: {
        key: string;
        label: string;
    });
}

interface OptionState {
    key: string;
    options: Array<string>;
    defaultValue?: string;
    available: number;
}
type OptionContextState = {
    [index: string]: OptionState;
};
declare const OptionsContext: React.Context<OptionContext | null>;
declare class OptionContext {
    private stateChangeListeners;
    private valueChangeListeners;
    private _state;
    private _data;
    private readonly _options;
    get options(): Option[];
    get state(): OptionContextState;
    constructor(options: Array<Option>);
    addStateChangeListener(listener: () => void): void;
    removeStateChangeListener(listener: () => void): void;
    addValueChangeListener(listener: (key: string, value: string) => void): void;
    removeValueChangeListener(listener: (key: string, value: string) => void): void;
    optionEnter(key: string): void;
    optionExit(key: string): void;
    getOptionState(key: string): OptionState | null;
    getValue(key: string): string | null;
    setValue(key: string, value: string): void;
    setData(data: {
        [index: string]: string;
    }): void;
    setDataDuringRender(data: {
        [index: string]: string;
    }): void;
    setDefaultValue(key: string, defaultValue: string): void;
    setOptions(key: string, options: Array<string>): void;
    private setState;
    private notifyListener;
}

declare const allOptions: Option[];

declare const PALETTES: {
    BACKDROP: string;
    SKIN: string;
    HAIR: string;
    FACIAL_HAIR: string;
    CLOTHES: string;
    HAT: string;
};
declare function addPaletteColor(palette: string, name: string, color?: string | GradientConfig): any;
interface Props {
    [key: string]: any;
    className?: string;
    style?: React.CSSProperties;
    backdropType?: string;
    backdropColor?: string;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    hatColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
    uid?: string;
    animationDelay?: string;
    animated?: boolean;
}
declare const AvatarComponent: React.FC<Props>;

declare const Piece: React.FC<Props>;
declare function removePaletteColor(palette: string, name: string): void;
interface GradientStop {
    offset: string;
    color: string;
    opacity?: number | string;
}
interface GradientConfig {
    type: 'linear' | 'radial';
    attrs?: Record<string, any>;
    stops: GradientStop[];
}
declare const registeredGradients: Map<string, GradientConfig>;
declare function registerGradient(name: string, config: GradientConfig): void;
declare const BACKDROP_TYPES: string[];
declare const BACKDROP_COLORS: string[];
declare const TOP_TYPES: string[];
declare const HAIR_COLORS: string[];
declare const HAT_COLORS: string[];
declare const FACIAL_HAIR_TYPES: string[];
declare const FACIAL_HAIR_COLORS: string[];
declare const CLOTHE_TYPES: string[];
declare const CLOTHE_COLORS: string[];
declare const ACCESSORIES_TYPES: string[];
declare const GRAPHIC_TYPES: string[];
declare const EYE_TYPES: string[];
declare const EYEBROW_TYPES: string[];
declare const MOUTH_TYPES: string[];
declare const SKIN_COLORS: string[];
declare const getColorFamily: (color: string) => string;
declare function generateRandomAvataarProps(customOptions?: Record<string, string[]>): Record<string, string>;
declare const HASH_ORDER: string[];
declare const DEFAULT_AVATAR_PROPS: Record<string, string>;
declare function getOptionList(key: string): string[];
declare function getAvatarHash(config: Record<string, string>): string;
declare function getAvatarConfigFromHash(hash: string): Record<string, string>;

export { ACCESSORIES_TYPES, Avatar, AvatarComponent, BACKDROP_COLORS, BACKDROP_TYPES, CLOTHE_COLORS, CLOTHE_TYPES, DEFAULT_AVATAR_PROPS, EYEBROW_TYPES, EYE_TYPES, FACIAL_HAIR_COLORS, FACIAL_HAIR_TYPES, GRAPHIC_TYPES, type GradientConfig, type GradientStop, HAIR_COLORS, HASH_ORDER, HAT_COLORS, MOUTH_TYPES, Option, OptionContext, OptionsContext, PALETTES, Piece, type Props, SKIN_COLORS, TOP_TYPES, addPaletteColor, allOptions, AvatarComponent as default, generateRandomAvataarProps, getAvatarConfigFromHash, getAvatarHash, getColorFamily, getOptionList, registerGradient, registeredGradients, removePaletteColor };
