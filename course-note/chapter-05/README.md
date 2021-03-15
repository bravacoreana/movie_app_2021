#### 5.0 Deploying to Github Pages

1. `npm install gh-pages`
2. package.json 안에 `"homepage": "https://bravacoreana.github.io/movie_app_2021"` 추가
   예) `"homepage": "https://GITHUB_ID.github.io/NAME_OF_REPOSITORY` (모두 소문자임에 주의!)
3. `npm run build`
   1. build 폴더 생성 된 것 확인! 👉🏼 우리는 이 폴더를 `gh-pages`를 업로드 할 거야.
4. ```javascript
   "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "deploy": "gh-pages -d build",  // 우리가 npm run deploy를 하면 npm은 smart enough 해서 predeploy까지 실행함
       "predeploy": "npm run build"
   },
   ```

   deploy와 predeploy 명령어를 만든다. 이때 **deploy**와 pre**deploy** 두 단어가 반드시 같아야 함에 주의하자.
   deploy는 build 폴더를 gh-pages 에 업로드 한다. 그리고 우리가 build 폴더를 얻는 방법은 `npm run build` 를 실행하는 것이다.
   deploy를 호출하면 predeploy가 자동으로 실행된다.

5. `npm run deploy`
6. 배포가 된 것을 확인한다!
7. 만약 코드에 수정사항이 있으면 수정 후 다시 `npm run deploy` 해준다.

#### 5.1 Are we done?

리액트에서 더이상 state를 갖기 위해 class component 가질 필요가 없다. 👉🏼 react hook 때문! react hook은 replacement가 아님, 완전히 새로운 거야!

---

[목록으로](../../README.md) / [이전으로](../chapter-04/README.md) / [다음으로](../chapter-06/README.md)

1. [SETUP](../chapter-01/README.md)
2. [JSX & PROPS](../chapter-02/README.md)
3. [STATE](../chapter-03/README.md)
4. [MAKING THE MOVIE APP](../chapter-04/README.md)
5. [CONCLUSIONS](../chapter-05/README.md)
6. [ROUTING BONUS](../chapter-06/README.md)
