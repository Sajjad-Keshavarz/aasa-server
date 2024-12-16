# Companion Server for the react-native-passkeys repository

This is a simple server that serves the mandatory platform files for the `react-native-passkeys` repository.

It can serve the [AASA](https://developer.apple.com/documentation/xcode/supporting-associated-domains) file for the iOS app and the [`assetslinks.json`](https://developer.android.com/training/app-links/verify-android-applinks) file for the Android app.

## Update files with your own info

1. Add your Apple team id instead `add_your_apple_team_id_here` in the `apple-app-site-association` file
2. Add your Android keystore sha256 fingerprint instead `add_your_sha256_cert_fingerprints_here` in the `assetslinks.json` file.

To extract the sha256 fingerprint from your keystore, you can use the following command:

```bash
keytool -list -v -keystore <path-to-debug-keystore> -alias androiddebugkey -storepass android -keypass android
```

## Run the server

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server
