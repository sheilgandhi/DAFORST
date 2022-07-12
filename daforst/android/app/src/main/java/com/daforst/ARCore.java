package com.daforst;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.widget.Toast;

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
        // Current issue Activity is not found
        Uri uri = Uri.parse("https://play.google.com/store/apps/details?id=com.google.ar.core.examples.java.persistentcloudanchor");
        Intent callIntent = new Intent(Intent.ACTION_VIEW, uri);
        try {
            getCurrentActivity().startActivity(callIntent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Override
    public String getName() {
        return "ARCore";
    }
}
