package com.daforst;

import android.content.Intent;
import android.net.Uri;
import android.provider.MediaStore;
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
        Uri uri = Uri.parse("com.google.ar.core.examples.java.persistentcloudanchor.CloudAnchorActivity");
        Intent callIntent = new Intent(Intent.ACTION_SEND, uri);
//        Intent intent = Intent.createChooser(callIntent, );
        callIntent.setType("text/plain");
//        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        try {
            Toast.makeText(getReactApplicationContext(), uri.toString(), Toast.LENGTH_LONG).show();
            getCurrentActivity().startActivity(callIntent);
//            getCurrentActivity().startActivityForResult(takePictureIntent, 1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Override
    public String getName() {
        return "ARCore";
    }
}
