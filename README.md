# JSON to Tasks

Super Productivity plugin for creating tasks from pasted JSON.

## Supported Input

Paste either one task object or an array of task objects.

```json
{
  "title": "Draft customer onboarding checklist",
  "project": "Client Launch",
  "tags": ["Writing", "High Priority"],
  "estimateMinutes": 45,
  "dueDay": "2026-08-07",
  "notes": "Definition of done: first draft is ready for review."
}
```

```json
[
  {
    "title": "Prepare release notes",
    "project": "Product Ops",
    "tags": ["Release", "Writing"],
    "notes": "Mention the import plugin and migration notes.",
    "timeEstimate": 1800000,
    "dueDay": "2026-08-07",
    "isDone": false,
    "subTasks": [
      {
        "title": "Collect merged pull requests",
        "estimateMinutes": 20
      },
      {
        "title": "Send draft to support team",
        "estimateMinutes": 10
      }
    ]
  },
  {
    "title": "Review analytics dashboard",
    "project": "Growth Experiments",
    "tags": ["Analytics"],
    "description": "Check weekly conversion changes before planning.",
    "estimateMs": 1200000,
    "date": "2026-08-08"
  }
]
```

Required field: `title`.

Optional create fields: `projectId`, `tagIds`, `notes`, `timeEstimate`, `parentId`, `isDone`, `dueDay`.

Optional post-create update fields: `timeSpent`, `timeSpentOnDay`, `doneOn`, `attachments`, `remindAt`, `dueWithTime`, `repeatCfgId`, `issueId`, `issueProviderId`, `issueType`, `issueWasUpdated`, `issueLastUpdated`, `issueAttachmentNr`, `issuePoints`.

Convenience aliases:

- `description`, `note`, `content` -> `notes`
- `estimateMs` -> `timeEstimate`
- `estimateMinutes` -> converted to milliseconds
- `dueDate`, `date` -> `dueDay`
- `tags` -> `tagIds`
- `project` -> `projectId`
- `subtasks`, `children` -> `subTasks`

`projectId` and `tagIds` are treated as ids and must exist in Super Productivity. `project` and `tags` are resolved by existing titles. If a title does not exist, the plugin asks whether it should create the missing project or tag before importing.

`Today` is a view, not a normal tag. Use `dueDay` to schedule a task for a day.

Super Productivity supports root tasks and one subtask level. Nested subtasks deeper than that are rejected by this plugin. Subtasks inherit their parent project and tags, so `project`, `projectId`, `tags`, and `tagIds` on subtasks are ignored with a warning.

## Build ZIP

Create a flat ZIP containing `manifest.json`, `plugin.js`, `index.html`, `icon.svg`, and `README.md`, then upload it from Super Productivity settings.
