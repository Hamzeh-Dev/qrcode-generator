"use client"

import { useQRGenerator } from "@/hooks/useQRGenerator";
import { InputSection } from "@/components/qr-generator/input-section";
import { QRPreview } from "@/components/qr-generator/qr-preview";

export default function QRCodeGenerator() {
    const { settings, updateSettings, downloadQRCode, qrRef, canvasRef } = useQRGenerator()

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8">
                    <InputSection settings={settings} onSettingsChange={updateSettings} />
                    <QRPreview ref={qrRef} settings={settings} onDownload={downloadQRCode} />
                </div>

                <canvas ref={canvasRef} className="hidden" />
            </div>
        </div>
    )
}
