# 概要

Nextjs を使った Notion の CloneApp

## 参考

- https://www.notion.so/ja-jp
- https://www.youtube.com/watch?v=0OaDyjB9Ib8

## 起動方法

### 環境変数の設定

```
# convex
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

# clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=
```

### Convex の設定

```
npx convex dev
```

### 起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
