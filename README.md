# Flow Docs

Developer documentation for Flow Cloud, built with [Mintlify](https://mintlify.com).

## Local development

Install the Mintlify CLI:

```bash
npm i -g mint
```

Preview the docs:

```bash
mint dev
```

View the local preview at `http://localhost:3000`.

## Validation

Check links before pushing:

```bash
mint broken-links
```

## Content structure

- `ide/`: Flow IDE workspace docs.
- `project-settings/`: General settings and Vault-backed configuration docs.
- `architecture/`: Service and data-flow docs.
- `api/`: Gateway, projects service, and vault service contracts.
- `operations/`: Local development and deployment notes.

## Publishing changes

Mintlify deploys from GitHub after the Mintlify GitHub app is connected.
