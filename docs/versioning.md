# Understanding VcRedist Versioning

VcRedist uses `major.minor.patch[-prerelease]` versioning. Version 5 introduces breaking changes; beta releases, such as `5.0.4-beta5`, identify prerelease builds.

## Major release

Major releases typically introduce breaking changes. Major releases are likely to break scripts using the VcRedist module.

## Minor release

Minor releases typically add new features such as additional public functions. Minor releases should not break scripts using the VcRedist module, but testing is always recommended.

## Patch release

Patch releases provide bug fixes and maintenance updates. A prerelease suffix indicates that the release is not yet a stable release.
