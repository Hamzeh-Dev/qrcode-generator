"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CustomizationOptionsProps } from "@/lib/types/qr-generator";

export function CustomizationOptions({
    size,
    bgColor,
    fgColor,
    errorLevel,
    onSizeChange,
    onBgColorChange,
    onFgColorChange,
    onErrorLevelChange,
}: CustomizationOptionsProps) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="size">Size: {size[0]}px</Label>
                    <Slider id="size" min={128} max={512} step={32} value={size} onValueChange={onSizeChange} className="mt-2" />
                </div>

                <div>
                    <Label htmlFor="error-level">Error Correction</Label>
                    <Select value={errorLevel} onValueChange={onErrorLevelChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="L">Low (7%)</SelectItem>
                            <SelectItem value="M">Medium (15%)</SelectItem>
                            <SelectItem value="Q">Quartile (25%)</SelectItem>
                            <SelectItem value="H">High (30%)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="fg-color">Foreground Color</Label>
                    <div className="flex gap-2 mt-1">
                        <Input
                            id="fg-color"
                            type="color"
                            value={fgColor}
                            onChange={(e) => onFgColorChange(e.target.value)}
                            className="w-16 h-10 p-1 border rounded"
                        />
                        <Input
                            value={fgColor}
                            onChange={(e) => onFgColorChange(e.target.value)}
                            placeholder="#000000"
                            className="flex-1"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="bg-color">Background Color</Label>
                    <div className="flex gap-2 mt-1">
                        <Input
                            id="bg-color"
                            type="color"
                            value={bgColor}
                            onChange={(e) => onBgColorChange(e.target.value)}
                            className="w-16 h-10 p-1 border rounded"
                        />
                        <Input
                            value={bgColor}
                            onChange={(e) => onBgColorChange(e.target.value)}
                            placeholder="#ffffff"
                            className="flex-1"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
