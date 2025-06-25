"use client"

import { forwardRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, QrCode } from "lucide-react";
import type { QRCodeSettingsProps } from "@/lib/types/qr-generator";

interface QRPreviewProps {
    settings: QRCodeSettingsProps,
    onDownload: () => void,
}

export const QRPreview = forwardRef<HTMLDivElement, QRPreviewProps>(({ settings, onDownload }, ref) => {
    const { text, size, bgColor, fgColor, errorLevel, logoImage, logoSize } = settings;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Preview & Download</CardTitle>
                <CardDescription>
                    Your QR code will appear here.{" "}
                    {logoImage ? "Logo will be centered in the final download." : "Upload a logo to brand your QR code."}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col items-center space-y-6">
                    {text.trim() ? (
                        <>
                            <div className="relative">
                                <div className="p-6 bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-200">
                                    <div ref={ref} className="flex flex-col items-center">
                                        <QRCodeSVG
                                            value={text}
                                            size={Math.min(size[0], 300)}
                                            bgColor={bgColor}
                                            fgColor={fgColor}
                                            level={errorLevel as "L" | "M" | "Q" | "H"}
                                            includeMargin={true}
                                            imageSettings={logoImage ? {
                                                src: logoImage,
                                                x: undefined,
                                                y: undefined,
                                                height: (Math.min(size[0], 300) * logoSize[0]) / 100,
                                                width: (Math.min(size[0], 300) * logoSize[0]) / 100,
                                                opacity: 1,
                                                excavate: true,
                                            } : undefined}
                                        />

                                        {settings.title.trim() && (
                                            <div className="mt-4 text-center">
                                                <p
                                                    className="font-bold text-lg"
                                                    style={{
                                                        color: fgColor,
                                                        fontSize: `${Math.min(size[0], 300) * 0.08}px`,
                                                        maxWidth: `${Math.min(size[0], 300)}px`,
                                                    }}
                                                >
                                                    {settings.title}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-600">
                                    Size: {size[0]} × {size[0]} pixels
                                    {logoImage && ` • Logo: ${logoSize[0]}%`}
                                </p>
                                <Button onClick={onDownload} className="gap-2" size="lg">
                                    <Download className="h-4 w-4" />
                                    Download PNG
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <QrCode className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">Enter some text or URL above to generate your QR code</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
})

QRPreview.displayName = "QRPreview";
