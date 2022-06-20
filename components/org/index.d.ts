import React from 'react';
import * as figmaDesignTokens from '@altinn/figma-design-tokens';
export { figmaDesignTokens as tokens };
export { default as jsonTokens } from '@altinn/figma-design-tokens/dist/tokens.json';

declare enum PanelVariant {
    Info = "info",
    Warning = "warning",
    Success = "success"
}
interface RenderIconProps {
    size: string;
    variant: PanelVariant;
}
interface PanelProps {
    title: React.ReactNode;
    children: React.ReactNode;
    renderIcon?: ({ size, variant }: RenderIconProps) => React.ReactNode;
    variant?: PanelVariant;
    showPointer?: boolean;
    showIcon?: boolean;
}
declare const Panel: ({ renderIcon, title, children, variant, showPointer, showIcon, }: PanelProps) => any;

interface RadioButtonsProps {
    greeting?: string;
}
declare const RadioButtons: ({ greeting }: RadioButtonsProps) => any;

export { Panel, PanelVariant, RadioButtons };
