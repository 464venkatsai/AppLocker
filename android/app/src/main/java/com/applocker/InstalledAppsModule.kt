package com.applocker

import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.Canvas
import android.util.Base64
import android.util.Log
import com.facebook.react.bridge.*
import java.io.ByteArrayOutputStream

class InstalledAppsModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "InstalledApps"
  }

  @ReactMethod
  fun getInstalledApps(promise: Promise) {
    try {
      val pm = reactApplicationContext.packageManager
      val apps = pm.getInstalledApplications(PackageManager.GET_META_DATA)
      val appList = WritableNativeArray()

      for (app in apps) {
        if (pm.getLaunchIntentForPackage(app.packageName) != null) {
          val appInfo = WritableNativeMap()

          val appName = pm.getApplicationLabel(app).toString()
          val packageName = app.packageName
          val iconDrawable = pm.getApplicationIcon(app)

          // Convert drawable to bitmap
          val bitmap = Bitmap.createBitmap(
            iconDrawable.intrinsicWidth.coerceAtLeast(1),
            iconDrawable.intrinsicHeight.coerceAtLeast(1),
            Bitmap.Config.ARGB_8888
          )
          val canvas = Canvas(bitmap)
          iconDrawable.setBounds(0, 0, canvas.width, canvas.height)
          iconDrawable.draw(canvas)

          // Convert bitmap to base64
          val outputStream = ByteArrayOutputStream()
          bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
          val iconBase64 = Base64.encodeToString(outputStream.toByteArray(), Base64.NO_WRAP)

          appInfo.putString("appName", appName)
          appInfo.putString("packageName", packageName)
          appInfo.putString("icon", iconBase64)

          appList.pushMap(appInfo)
        }
      }

      promise.resolve(appList)
    } catch (e: Exception) {
      Log.e("InstalledApps", "Error fetching apps", e)
      promise.reject("APP_FETCH_ERROR", e.message)
    }
  }
}
