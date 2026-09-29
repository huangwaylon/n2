// Render a crop of one PDF page to PNG with PDFKit — the fallback for tools/zoom.sh where pdftoppm (poppler) isn't
// installed. Same crop semantics as `pdftoppm -r DPI -x X -y Y -W W -H H` (pixels at DPI, from the top-left).
// usage: pdfcrop PDF PAGE DPI X Y W H OUT.png      (compiled by zoom.sh into /tmp on first use)
import AppKit
import PDFKit

let a = CommandLine.arguments
guard a.count == 9, let doc = PDFDocument(url: URL(fileURLWithPath: a[1])), let page = doc.page(at: Int(a[2])! - 1) else {
  FileHandle.standardError.write("usage: pdfcrop PDF PAGE DPI X Y W H OUT.png\n".data(using: .utf8)!); exit(1)
}
let scale = Double(a[3])! / 72, x = Double(a[4])!, y = Double(a[5])!
let box = page.bounds(for: .mediaBox)
let W = min(Int(a[6])!, Int(box.width * scale) - Int(x)), H = min(Int(a[7])!, Int(box.height * scale) - Int(y))
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: W, pixelsHigh: H, bitsPerSample: 8, samplesPerPixel: 4,
                           hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
let cg = NSGraphicsContext(bitmapImageRep: rep)!.cgContext
cg.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1)); cg.fill(CGRect(x: 0, y: 0, width: W, height: H))
// PDF space is bottom-up: move the crop's top-left corner to the bitmap's top-left
cg.translateBy(x: -x, y: Double(H) + y - box.height * scale)
cg.scaleBy(x: scale, y: scale)
cg.translateBy(x: -box.minX, y: -box.minY)
page.draw(with: .mediaBox, to: cg)
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: a[8]))
