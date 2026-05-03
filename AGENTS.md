# Documentation project instructions

## About this project

- This is the Flow Cloud documentation site built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint broken-links` to check links.

## Terminology

- Use **Flow Cloud** for the product.
- Use **Flow IDE** for the browser-based coding workspace.
- Use **Flow AI** for the assistant rail.
- Use **project** for a persisted app workspace.
- Use **Vault-backed configuration** for secrets, environment variables, certificates, and profiles stored by `flow-vault-service`.
- Use **Project Settings** for project-level configuration pages.

## Style preferences

- Use active voice and second person ("you").
- Keep sentences concise; one idea per sentence.
- Use sentence case for headings.
- Bold UI labels, such as **Project Settings**.
- Use code formatting for file names, commands, paths, and code references.
- Prefer concrete workflows and contracts over marketing copy.

## Content boundaries

- Document shipped or actively implemented behavior.
- Mark future behavior as planned instead of describing it as live.
- Do not publish secrets, real tokens, private Vault URLs, or production credentials.
- Service-to-service endpoints must call out auth requirements clearly.
