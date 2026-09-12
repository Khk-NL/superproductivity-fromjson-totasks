# JSON to Tasks

将 JSON 批量导入为 Super Productivity 任务和子任务。

## 功能

- 导入单个任务或任务数组
- 支持按项目分组导入任务，并继承项目级默认标签
- 支持一层子任务
- 按名称匹配项目和标签，缺失时可确认创建
- 导入前校验并预览
- 支持中文、English、日本語、한국어、Español
- 内置 JSON 示例和字段说明

## 安装

在 Super Productivity 的插件设置中上传 `json-to-tasks.zip`。

## 示例

```json
[
  {
    "title": "整理本周计划",
    "project": "学习",
    "tags": ["重要"],
    "estimateMinutes": 30,
    "dueDay": "2026-09-13",
    "notes": "完成后检查遗漏项",
    "subTasks": [
      { "title": "列出本周目标", "estimateMinutes": 10 }
    ]
  }
]
```

## 字段

- 必填：`title`
- 常用可选：`project`、`projectId`、`tags`、`tagIds`、`notes`、`timeEstimate`、`estimateMinutes`、`isDone`、`dueDay`、`parentId`、`subTasks`
- 常用别名：`name`/`summary` → `title`，`description`/`note`/`content` → `notes`，`date`/`dueDate` → `dueDay`，`children`/`subtasks` → `subTasks`

项目和标签 ID 必须已存在；使用名称时，插件可以在确认后创建缺失项。子任务继承父任务的项目和标签，只支持一层嵌套。

也可以按项目分组导入。项目级的 `title`、`project` 或 `projectId` 会作为任务默认项目，项目级 `tags` 或 `tagIds` 会作为任务默认标签；任务自身字段优先：

```json
{
  "projects": [
    {
      "title": "考研",
      "tags": ["学习"],
      "tasks": [
        {
          "title": "复习链表",
          "estimateMinutes": 60,
          "subTasks": [
            { "title": "数据结构" }
          ]
        },
        {
          "title": "复习二叉树",
          "tags": ["重点"]
        }
      ]
    },
    {
      "title": "课程",
      "tasks": [
        { "title": "完成计网作业" }
      ]
    }
  ]
}
```

## 打包

ZIP 根目录包含 `manifest.json`、`plugin.js`、`index.html`、`icon.svg`、`README.md` 和 `CHANGELOG.md`。
