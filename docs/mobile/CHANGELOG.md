# ReadyClip Mobile changelog

[Development timeline and test history](DEVLOG.md)

## Unreleased

The current Android and iOS development projects declare version `0.1.0`. The entries below describe development builds.

### Added

- Import footage from Photos or Files, detect audio highlights, review the chosen time ranges and assemble a reel. Randomize builds a reel with a target length from one to four minutes. On Android, remove individual shots and review the updated duration and preview.
- Choose Racing Blue, Alpine Cyan, Factory Orange or Stealth in settings.
- Save exported video or open the system share sheet.
- **Android test build** — Copy a complete supported MP4 byte for byte, or trim compatible SDR AVC/HEVC footage at independently decodable keyframes. ReadyClip asks before moving a cut to a nearby keyframe and verifies the output before saving.
- **iOS test source** — Preview and export through AVFoundation. The lossless exporter checks sample bytes, timing and format compatibility. Xcode and iPhone validation are pending.

### Changed

- **Android test build** — Faster audio analysis for long recordings. An emulator test reduced analysis time from 3:17 to 1:46 for the same 31-minute clip and preserved the detected highlight boundaries.
- **Android and iOS development builds** — Preview generation and export report progress. Preview controls include Warm, Cool and Trail grades and a blur range of 0–99. The Android emulator kept playing while blur was adjusted. On-device progress display remains unverified.
- **Android development build** — Previews use 720p H.264 with sound enabled by default. The build also introduced a dark Racing Blue launcher icon. Audible preview playback remains unverified.

### Known limitations

- Preview lag has been reported on Android.
- For lossless export, choose Natural and turn motion blur off. Effects can be reviewed in preview.
- Android device checks for long DJI recordings, rotation and low storage remain open.

## Release practice

Keep user-visible changes under Unreleased, grouped under Added, Changed, Fixed or Removed as needed. When a mobile build ships, move its entries under the actual version and release date, link the tag or store listing, and start a fresh Unreleased section. Label Android and iOS separately when their capabilities or release dates differ.
