package com.daforst;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ARCore extends ReactContextBaseJavaModule {
    public ARCore(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void startARCore() {
        Uri uri = Uri.parse("com.google.ar.core.examples.java.persistentcloudanchor.MainLobbyActivity");
        Intent callIntent = new Intent(Intent.ACTION_SEND, uri);
        callIntent.setType("text/plain");
        try {
//            Toast.makeText(getReactApplicationContext(), uri.toString(), Toast.LENGTH_LONG).show();
            getCurrentActivity().startActivityForResult(callIntent, 1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void getFromARCore(Callback successCallback) {
        successCallback.invoke(null, MainActivity.ar_core_id);
    }


    @Override
    public String getName() {
        return "ARCore";
    }
}
