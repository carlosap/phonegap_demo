#Install Cordova
The goal for mobile development with cordova is to a)develop in ReactJs, b) Build applicaiton using Webpack, and c) Build Cordova app.



See Getting Started [Documentation](https://cordova.apache.org/#getstarted).

#Gradel
Make sure Gradel is install (by running the gradle -v command)in your environment. If not, please follow the following instructions
https://gradle.org/install/
```
gradle -v
------------------------------------------------------------
Gradle 6.6.1
------------------------------------------------------------

Build time:   2020-08-25 16:29:12 UTC
Revision:     f2d1fb54a951d8b11d25748e4711bec8d128d7e3

Kotlin:       1.3.72
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.8 compiled on May 10 2020
JVM:          1.8.0-25 (Microsoft 25.71-b00)
OS:           Windows 10 10.0 amd64

```
# Install Cordova CLI

```
npm install -g cordova

```
# Create a simple application (Skip if you already have one)
if you already have an application, skip step.

```
cordova create simple
cordova platform add ios
cordova platform add android
```
# Test App with emulator (Android Studio)
If you have you default emulator, you can simply just do the following command.
you can also plugin your device via USB and the run command will install it in your device


```
emulator -avd Nexus_6_API_23
cordova run ios         (Mac user)
cordova run android     (Android Studio user)
```

# Build the package and test locally
```
cordova build android
cordova run android
```

#Build an APK for release
Note, the command provides a location where the package release was created.
We also need to address the "unsigned" requirements with a digital signed certificate.
to learn more about singning certificates you can read about [here](https://developer.android.com/studio/publish/app-signing)
```

#1- Build the APK
cordova build --release
BUILD SUCCESSFUL in 12s
43 actionable tasks: 43 executed
Built the following apk(s):
        C:\Users\cperez\gocode\src\github.com\HALNextGen\DevOpsProjects\Mobile\PhoneGap\demoapp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

#use the JDK tools to generate the keystores. Make sure remember the 'keystore' name and the alias name
#if you don't have keytool, you most likely need to install java. Try [here](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
#if installed correctly you can see the tool at C:\Program Files\Java\jre1.8.0_261\bin folder
#also make sure it is part of your system env to automate the command line

#2- Create the Key
keytool -genkey -v -keystore android.halamerica -alias android-app-halamerica -keyalg RSA -keysize 2048 -validity 10000

#3- Sign the APK with the Key
#Since Java was install, we are going to use a tool call 'jarsigner' which can be found in the  C:\Program Files\Java\jdk1.8.0_261\bin  directory
#make sure it is part of your system env to automate the command line

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore android.halamerica app-release-unsigned.apk android-app-halamerica

#It will ask you for the passwords and then sign the APK, but it will not rename or create a new file so don’t go looking for anything.
#if you like to verify the process you can do a 'ls' command and should see the keystore

> ls

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        10/14/2020   8:32 PM           2263 android.halamerica
-a----        10/14/2020   9:16 PM        1632153 app-release-unsigned.apk
-a----        10/14/2020   6:35 PM            390 output.json

#4- Optimize the APK
#To optomize the APK you can run another tool call 'zipalign' which gets install with android studio. Beside optimization we want to
#also rename the file so that it reflects the signing file.

#In my current PC I was able to find this tool at C:\Program Files (x86)\Android\android-sdk\build-tools\28.0.3
#if linux you can use zipalign is not installed run the 'sudo apt install zipalign'
#the following was executed using windows (using cmd):

"C:\Program Files (x86)\Android\android-sdk\build-tools\28.0.3\zipalign.exe" -v 4 app-release-unsigned.apk app-release.apk

>ls

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        10/14/2020   8:32 PM           2263 android.halamerica
-a----        10/14/2020   9:16 PM        1632153 app-release-unsigned.apk
-a----        10/14/2020   9:32 PM        1632196 app-release.apk
-a----        10/14/2020   6:35 PM            390 output.json

*The app-release-apk is our final product
```

#Distribute to Testers via Appcenter
#TODO


#DevOps Recommendations
1) make sure to have these tools installed in your env:
        a) gradle
        b) cordova
        c) keytool
        d) jarsigner
        e) zipalign
        f) appcenter
2) cd to app directory