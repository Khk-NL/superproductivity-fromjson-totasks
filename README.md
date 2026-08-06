# JSON to Tasks

Super Productivity plugin for creating tasks from pasted JSON.

## Supported Input

Paste either one object or an array of objects:

```json
[
  {
    "title": "Экспортировать Marketing CV v1 в PDF",
    "project": "Работа",
    "tags": ["Сегодня"],
    "estimateMinutes": 30,
    "dueDay": "2026-08-07",
    "notes": "Критерий готовности: финальный PDF лежит локально."
  },
  {
    "title": "Prepare release notes",
    "notes": "Mention JSON import plugin",
    "timeEstimate": 1800000,
    "dueDay": "2026-08-07",
    "isDone": false,
    "projectId": "project-id",
    "tagIds": ["tag-id"],
    "subTasks": [
      {
        "title": "Collect changes",
        "estimateMinutes": 20
      }
    ]
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

`projectId` and `tagIds` are treated as ids. `project` and `tags` are resolved by existing titles. Unknown optional fields are ignored.

`Today` / `Сегодня` is a view, not a normal tag. Use `dueDay` to schedule a task for a day.

## Build ZIP

Create a flat ZIP containing `manifest.json`, `plugin.js`, `index.html`, and `icon.svg`, then upload it from Super Productivity settings.
