import React from 'react';
import '@altinn/figma-design-tokens/dist/tokens.css';
export declare enum PanelVariant {
    Info = "info",
    Warning = "warning",
    Success = "success"
}
interface RenderIconProps {
    size: string;
    variant: PanelVariant;
}
export interface PanelProps {
    title: React.ReactNode;
    children: React.ReactNode;
    renderIcon?: ({ size, variant }: RenderIconProps) => React.ReactNode;
    variant?: PanelVariant;
    showPointer?: boolean;
    showIcon?: boolean;
}
export declare const Panel: ({ renderIcon, title, children, variant, showPointer, showIcon, }: PanelProps) => any;
export {};
