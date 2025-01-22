# SnowChat

[English](./README.en.md) | [简体中文](./README.md)

## 项目背景

在当前AI快速发展的背景下，各类AI助手层出不穷，但存在以下问题：

1. 过于臃肿，夹杂了很多非必要的功能
2. 需要复杂的服务器部署和环境配置
3. 依赖在线服务，离线场景无法使用
4. 启动速度慢，资源消耗大

SnowChat 旨在解决这些问题，打造一个一站式的 AI 助手聊天平台：

- **线前端**
  - 无需后端服务
  - 无需安装环境
  - 支持离线使用

- **轻量级设计**
  - 按需加载模型
  - 快速冷启动
  - 本地优先

- **数据安全**
  - 所有数据本地存储
  - 无需担心隐私泄露
  - 支持导入导出数据

- **开箱即用**
  - 零配置启动
  - 无需复杂部署

## 项目目标

- 为用户提供简单易用的 AI 对话界面
- 整合多种 AI 模型，提供统一的访问方式
- 支持助手市场，方便用户选择和使用不同类型的 AI 助手
- 提供完整的中文支持和本地化体验
- 确保数据安全和隐私保护

## 核心功能

- 🤖 智能对话：支持多轮对话，上下文理解
- 🏪 助手市场：提供多样化的 AI 助手选择
- 🎯 场景定制：针对不同场景优化的助手模板
- 🔒 安全可靠：数据加密存储，隐私保护
- 🌐 多语言支持：中英文无缝切换
- 📱 响应式设计：支持各种设备访问

## 技术栈

- 前端：Vue 3 + TypeScript + Tailwind CSS
- 状态管理：Vuex/Pinia
- 路由：Vue Router
- 国际化：Vue I18n
- 构建工具：Vite
- UI 组件：自主开发

## 项目结构

```txt
src/
├── assets/          # 静态资源
├── components/      # 公共组件
├── i18n/           # 国际化配置
├── modules/        # 功能模块
├── router/         # 路由配置
├── store/          # 状态管理
├── types/          # TypeScript 类型
└── views/          # 页面视图
```

## 开发环境设置

- 克隆项目

```bash
git clone https://github.com/hfghgakjd/snowchat.git
cd snowchat
```

- 安装依赖

```bash
npm install
```

- 启动开发服务器

```bash
npm run dev
```

## 如何贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 开源协议

本项目采用 MIT 协议。详见 [LICENSE](LICENSE) 文件。

## 联系方式

- 项目主页：[https://github.com/hfghgakjd/snowchat](https://github.com/hfghgakjd/snowchat)

- 问题反馈：[https://github.com/hfghgakjd/snowchat/issues](https://github.com/hfghgakjd/snowchat/issues)

- 邮箱：[snowfog@outlook.com](mailto:snowfog@outlook.com)

## 致谢

感谢所有贡献者对项目的支持！
