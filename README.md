# sunset-demo-repo

Seed repository for validating the **SunsetHQ GitHub onboarding pipeline** (Jira: SNHQ-44 / SNHQ-45).

Every supported GitHub surface is seeded here so the migration/Airbyte/bespoke extractors can be smoke-tested end-to-end against a single, throwaway private repo.

## What is seeded

| Surface | Notes |
|---|---|
| Discussions | 11 threads across Q&A, Ideas, General; 3 marked as answered |
| Actions workflows | `build.yml` (artifact upload), `codeql.yml` (security scan) |
| Dependabot config | `.github/dependabot.yml` weekly npm + actions |
| Outdated dep (alert bait) | `lodash@4.17.4` (CVE-2019-10744 prototype pollution) |
| Branch protection | `main` with required reviews + status checks + conversation resolution |
| Repository ruleset | `~DEFAULT_BRANCH` ruleset, required checks + PR rule |
| Webhooks | 1 hook to `https://example.com/sunset-test`, 4 events |
| Deploy keys | 1 ed25519 read-only deploy key |
| Environments | `production`, `staging`, `dev` with reviewer + wait timer on production |
| Env vars + secrets | Per-environment + repo-scoped |
| LFS object | `assets/sample.bin` (~50KB) via Git LFS |
| Releases | 2 releases with assets |
| Wiki | `Home.md` seeded |
| Projects v2 | 1 project linked to repo |

Seeded by Felipe Tejada on 2026-05-28 via the SunsetHQ planning automation.

## Cleanup

```sh
bash .planning/phases/snhq-44-45-github-onboarding/demo-repo-cleanup.sh
```
