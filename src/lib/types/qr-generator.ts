
export interface QRCodeSettingsProps {
    text: string,
    size: number[],
    bgColor: string,
    fgColor: string,
    errorLevel: string,
    logoImage: string,
    logoSize: number[],
}

export interface QuickTemplate {
    icon: React.ComponentType<{ className?: string}>,
    label: string,
    placeholder: string,
}

export interface CustomizationOptionsProps {
    size: number[],
    bgColor: string,
    fgColor: string,
    errorLevel: string,
    onSizeChange: (size: number[]) => void,
    onBgColorChange: (color: string) => void,
    onFgColorChange: (color: string) => void,
    onErrorLevelChange: (level: string) => void,
}

export interface InputSectionProps {
    settings: QRCodeSettingsProps,
    onSettingsChange: (updates: Partial<QRCodeSettingsProps>) => void,
}

export interface LogoUploadProps {
    logoImage: string,
    logoSize: number[],
    onLogoChange: (logo: string) => void,
    onLogoSizeChange: (size: number[]) => void,
}