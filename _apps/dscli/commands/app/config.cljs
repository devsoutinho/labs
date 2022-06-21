(ns commands.app.config
  (:require ["fs" :as fs]))

(def running-at js/process.env.DSCLI_RUNNING_AT)

(defn app-manifest []
  (let [path (str running-at "/app.manifest.json")]
    (-> (fs/readFileSync path #js {:encoding "utf-8"})
        js/JSON.parse
        (js->clj :keywordize-keys true))))

(def config {:name-paths {:android {:output-color "green"
                                    :path "android/app/src/main/AndroidManifest.xml"
                                    :pattern "android:label=\"(.+?)\""
                                    :result (fn [new-name] (str "android:label=\"" new-name "\""))}
                          :ios {:output-color "grey"
                                :path "ios/Runner/Info.plist"
                                :pattern "<key>CFBundleDisplayName</key>\n\t<string>(.+?)</string>"
                                :result (fn [new-name] (str "<key>CFBundleDisplayName</key>\n\t<string>" new-name "</string>"))}}
             :app-id-paths {:android {:path "android/app/build.gradle"
                                      :pattern "applicationId \"com.mariosouto.labs\""}}})
