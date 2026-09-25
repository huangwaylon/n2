// Usage: ocr <image> ...   → prints recognized Japanese text lines per image (Vision framework)
import Foundation
import Vision
import AppKit

for path in CommandLine.arguments.dropFirst() {
    guard let img = NSImage(contentsOfFile: path),
          let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { print("ERR \(path)"); continue }
    let req = VNRecognizeTextRequest()
    req.recognitionLevel = .accurate
    req.recognitionLanguages = (ProcessInfo.processInfo.environment["OCR_LANGS"] ?? "ja-JP,en-US").split(separator: ",").map(String.init)
    req.usesLanguageCorrection = true
    let h = VNImageRequestHandler(cgImage: cg, options: [:])
    try? h.perform([req])
    print("=== \(path)")
    for o in (req.results ?? []) { if let t = o.topCandidates(1).first { print(t.string) } }
}
