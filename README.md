- 8700 app
- AUTHOR: TO THANH THUONG
- VERSION: 1.3.0

## Background

8700 is a website and app owned by the NSW Department of Health, centred around research that indicates that
a human requires a balanced diet of 8700 calories to be healthy.

We have been tasked to make design and copy changes within both the Apple Store and Android version of the
apps to reflect some new branding. For addiJonal context - we are not doing a full redesign of the 8700 app as
the client are wanJng to disconJnue this app down the track once they have rebranded to “Healthy EaJng,
AcJve Living” (HEAL).

## Technologies

- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [ESLint](https://github.com/eslint/eslint) & [Prettier](https://github.com/prettier/prettier)

## Getting Started

Install node modules, [Yarn](https://yarnpkg.com/en/) is highly recommended.

```
Run `yarn`
```

On iOS you will need to run additional command (https://guides.cocoapods.org/using/getting-started.html)

```
cd ios

pod install

```

Run command:

```
yarn start
```

Point backend to `https://randomuser.me/api` for example
Run on Android/iOS device or simulator

```
$ npx react-native run-ios
$ npx react-native run-android
```

## Build:

Build Android:

```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
rm -rf ./android/app/src/main/res/drawable-*

rm -rf ./android/app/src/main/res/raw

```

```
cd android
```

```
./gradlew assembleRelease
```

Passwords for both are p0pc0rn!! and alias is 8700Key
change versionCode 10207
versionName "1.3.0"

keytool -genkey -v -keystore NSWFA-8700-app-release.keystore -alias NFA_8700 -keyalg RSA -keysize 2048 -validity 10000

Your new password:
o792o7L3G1BnV6r
