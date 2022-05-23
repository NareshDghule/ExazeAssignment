package com.exazeapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.os.Build;
import com.facebook.react.bridge.Promise;

public class DeviceInfoModule extends ReactContextBaseJavaModule {
   DeviceInfoModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
public String getName() {
   return "DeviceInfoModule";
}

 @ReactMethod
  public void getModel(Promise p) {
    p.resolve(isEmulatorSync());
  }

public boolean isEmulatorSync() {
   return Build.FINGERPRINT.startsWith("generic")
            || Build.FINGERPRINT.startsWith("unknown")
            || Build.MODEL.contains("google_sdk")
            || Build.MODEL.contains("Emulator")
            || Build.MODEL.contains("Android SDK built for x86")
            || Build.MANUFACTURER.contains("Genymotion")
            || Build.HARDWARE.contains("goldfish")
            || Build.HARDWARE.contains("ranchu")
            || Build.HARDWARE.contains("vbox86")
            || Build.PRODUCT.contains("sdk")
            || Build.PRODUCT.contains("google_sdk")
            || Build.PRODUCT.contains("sdk_google")
            || Build.PRODUCT.contains("sdk_x86")
            || Build.PRODUCT.contains("vbox86p")
            || Build.PRODUCT.contains("emulator")
            || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"));
}
}