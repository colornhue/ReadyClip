# ReadyClip mobile development log

[Mobile changelog](CHANGELOG.md) · [Windows releases](https://github.com/colornhue/ReadyClip/releases)

| When | Milestone | Evidence and verification |
| --- | --- | --- |
| Origin, date unknown | The original Python highlight extractor answered a rider’s editing question: which parts of a long recording are worth replaying? Audio peaks identified candidates, and padding kept the approach and follow-through. | Retrospective from the surviving Python engine. The first standalone script and its creation date have not been recovered. |
| By 2026-11-24 | The Windows V4 desktop app paired a PySide6 interface with a separate Python processing engine. V4.0.1 recorded a Python 3.15 compatibility fix and improved error diagnostics. | Desktop V4 README, VERSION.txt, app.py and readyclip_engine.py. Version numbers here identify desktop snapshots. |
| 2026-11-24 | The V4.4.0 desktop snapshot added waveform review, a compact layout and accent skins. The mobile port notes identified the data worth sharing across platforms: source duration, waveform, chosen time ranges and export progress. File access, playback and saving needed native implementations. | Highlight Reel Extractor VERSION.txt and MOBILE_PORT_NOTES.md. The notes were a design proposal. |
| 2026-11-24 | The mobile 0.1.0 project used Expo and React Native. Native audio analysis produced 100 ms RMS windows. The shared JavaScript detector applied a percentile threshold and merged nearby events. | Mobile app.json, package.json, detect.js and native media module. |
| 2026-11-25 to 2026-11-26 | The phone workflow grew from detecting individual moments into reviewing shots, shuffling reels, choosing a skin and saving or sharing an export. Android preview lag was reported and deferred. An iOS test project carried the workflow into Xcode. | Mobile App.js, montage.js, ExportComplete.js, iOS setup-mac.sh and development-session feedback. |
| 2026-11-26 | The Android lossless test APK bundled a verified-copy path for complete supported MP4 files and a keyframe-aware path for compatible trims. Natural grade with motion blur off permits lossless export. | Android README and LosslessMp4.kt. The recorded host test checked a complete HDR file byte for byte. Simulated media I/O covered trims and rejection cases. On-device validation of this build remains open. |
| 2026-11-26 | The iOS test source added AVFoundation sample copying and output verification. Preview effects are available. Export requires compatible streams and cuts. | iOS README and ReadyMediaModule.swift. Xcode compilation, device playback and saving to Photos still need verification. |
| 2026-11-27 | Windows published 0.5.3 beta with the themed export wheel and quieter Instagram sharing. Mobile still declares 0.1.0. | [Windows release](https://github.com/colornhue/ReadyClip/releases/tag/v0.5.3-beta). The wheel is recorded here as desktop history. |

Dates in the reconstructed entries refer to surviving project snapshots and development sessions. A build, a host test, a device test and a public release are recorded separately.

## Updating this log

Append a dated entry for each meaningful mobile change or test result. Record the platform, what changed, why it mattered and what was actually verified. Link the commit, issue, build or release when available. Correct earlier entries when better evidence turns up. Add user-visible changes to the changelog in the same update.
