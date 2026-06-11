# Advanced Markdown Features

## Tables

| Feature | Support | Notes |
|---------|---------|-------|
| Tables | ✅ | Use pipes and dashes |
| Task lists | ✅ | Use - [ ] syntax |
| Code blocks | ✅ | Use triple backticks |
| Alerts | ✅ | Use > [!NOTE] etc |

## Task Lists

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task

## Code Blocks with Syntax Highlighting

### JavaScript

\`\`\`javascript
function hello(name) {
  console.log(`Hello, ${name}!`);
}
\`\`\`

### Python

\`\`\`python
def hello(name):
    print(f"Hello, {name}!")
\`\`\`

### YAML

\`\`\`yaml
name: Example Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
\`\`\`

## Alerts

> [!NOTE]
> This is a note

> [!IMPORTANT]
> This is important

> [!WARNING]
> This is a warning

## Collapsible Sections

<details>
<summary>Click to expand</summary>

Hidden content goes here!

\`\`\`
code inside collapsible
\`\`\`

</details>

## Emoji

✅ Success
❌ Error
⚠️ Warning
🚀 Rocket
💡 Idea
🐛 Bug
📚 Documentation

## Links

- [Internal link](./getting-started.md)
- [External link](https://github.com)
- [Link with title](https://github.com "GitHub")

## Images

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Footnotes

This is a footnote[^1].

[^1]: This is the footnote content.

## HTML Comments

<!-- This is hidden -->

## Mentions

@CaffeineAndSquats #19 /cc @other-user