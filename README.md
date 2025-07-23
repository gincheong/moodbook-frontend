# Moodbook frontend

## 실행

```bash
npm install
npm run dev
```

실행 후 http://localhost:5173 에서 확인 가능합니다.

## Route

`src/routes/route.ts` 파일의 내용을 참고하시면 됩니다. 이 문서 작성 중인 현재 기준으로

```ts
export const Paths = {
  MAIN: '/',
  BOOKS: '/books',
  BOOK: '/book',
  ME: '/me',
  ADMIN: '/admin',
  SEARCH: '/search',
  AI_SEARCH: '/ai-search',
  SELECT_MOOD: '/select-mood',

  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
};
```

이고, `http://localhost:5173/books` 과 같은 형식으로 입력하셔서 진입하면 됩니다.
