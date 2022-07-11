package com.daforst;

import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ARCore extends ReactContextBaseJavaModule {
    public ARCore(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void startARCore() {
        Intent launchIntent = getReactApplicationContext().getPackageManager().getLaunchIntentForPackage("nz.co.pizzahut");

            getCurrentActivity().startActivity(launchIntent);//null pointer check in case package name was not found

    }


    @Override
    public String getName() {
        return "ARCore";
    }
}
