const ICONS = {
  aws: "devicon-amazonwebservices-plain-wordmark",
  // android: "devicon-android-plain",
  // apple: "devicon-apple-original",
  c: "devicon-c-plain",
  cplusplus: "devicon-cplusplus-plain",
  csharp: "devicon-csharp-plain",
  css3: "devicon-css3-plain",
  django: "devicon-django-plain",
  docker: "devicon-docker-plain",
  dotnet: "devicon-dotnetcore-plain",
  express: "devicon-express-original",
  flutter: "devicon-flutter-plain",
  git: "devicon-git-plain",
  html5: "devicon-html5-plain",
  java: "devicon-java-plain",
  javascript: "devicon-javascript-plain",
  jest: "devicon-jest-plain",
  mongodb: "devicon-mongodb-plain",
  nodejs: "devicon-nodejs-plain",
  npm: "devicon-npm-original-wordmark",
  python: "devicon-python-plain",
  react: "devicon-react-original",
  redux: "devicon-redux-original",
  sass: "devicon-sass-original",
  // swift: "devicon-swift-plain",
  tailwindcss: "devicon-tailwindcss-original-wordmark",
  threejs: "devicon-threejs-original",
  typescript: "devicon-typescript-plain",
  unity: "devicon-unity-original",
  postgresql: "devicon-postgresql-plain",
};

export const getIcon = (name) => {
  return ICONS[name.toLowerCase()];
};

export const getAllIcons = () => {
  return Object.values(ICONS);
};
